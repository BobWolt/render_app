"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const unsplashControllers_1 = require("../controllers/unsplashControllers");
router.route('/unsplash').get(unsplashControllers_1.getImage).post(unsplashControllers_1.setTodo);
exports.default = router;
