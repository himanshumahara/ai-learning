import * as dotenv from "dotenv";
dotenv.config();
import config from "config";
import OpenAI from "openai";

//console.log(config.get("openai.key"));
//console.log(config.get("ai.model"));


const client = new OpenAI();
const model = config.get("ai.model");

const response = await client.responses.create({
    model,
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log(response.output_text);