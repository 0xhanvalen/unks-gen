const fs = require("fs");
const { RollBackground, RollBody, CleanName, RollAccessory, RollMask } = require("./modules/index");
const {createCanvas, loadImage} = require("canvas");
const canvas = createCanvas(1000,1000);
const ctx = canvas.getContext("2d");

const drawLayer = async () => {
    const unks = 4000;
    for (i = 0; i < unks; i++) {
        ctx.clearRect(0,0, 1000,1000);
        let info = {
            traits: {}
        }
        let folder = "./TRAITS";
        
        let background = await RollBackground(folder);
        info.traits["Background"] = CleanName(background.name);
        ctx.drawImage(background.image, 0, 0, 1000, 1000);
    
        let body = await RollBody(folder);
        info.traits["Body Color"] = CleanName(body.name);
        ctx.drawImage(body.image, 0, 0, 1000, 1000);

        let bodyOutline = await loadImage("./TRAITS/BODY - Outline/Body.png");
        ctx.drawImage(bodyOutline, 0, 0, 1000, 1000);

        let accessory = await RollAccessory(folder);
        info.traits["Accessory"] = CleanName(accessory.name);
        ctx.drawImage(accessory.image, 0, 0, 1000, 1000);

        let headOutline = await loadImage("./TRAITS/HEAD - Outline/Head.png");
        ctx.drawImage(headOutline, 0, 0, 1000, 1000);

        let mask = await RollMask(folder);
        info.traits["Mask"] = CleanName(mask.name);
        ctx.drawImage(mask.image, 0, 0, 1000, 1000);

        info.description = "Unks are a collection of 3,500 generative PFPs.";
        info.website = "www.unks.com";
        info.image = `https://unks.s3.amazonaws.com/prod/${i}.png`
        saveLayer(canvas, info, i);
    }
}

const saveLayer = (_canvas, info, index) => {
    fs.writeFileSync(`./output/json/${index}.json`, JSON.stringify(info));
    fs.writeFileSync(`./output/images/${index}.png`, _canvas.toBuffer("image/png"));
}

drawLayer();