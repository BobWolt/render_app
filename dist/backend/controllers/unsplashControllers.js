"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTodo = exports.getImage = void 0;
const axios_1 = __importDefault(require("axios"));
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_SECRET_KEY}`
    console.log(process.env.UNSPLASH_ACCESS_KEY);
    axios_1.default
        .get(`https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=5&query=office>`)
        .then((response) => {
        console.log('Status Code:', response.data);
        res.status(200).json({ message: response.data });
    })
        .catch((err) => {
        console.log('Error: ', err.message);
    });
});
exports.getImage = getImage;
const setTodo = (req, res) => {
    res.status(200).json({ message: 'Set todo' });
};
exports.setTodo = setTodo;
//export default { getTodos, setTodo };
