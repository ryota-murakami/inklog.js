"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
/**
 * A Chalk Based Logger
 * @constructor
 */
class Logger {
    constructor() {
        this.noColor = false;
        this.base = chalk_1.default.black;
        this.logNoColor = chalk_1.default.white;
        this.noPrefix = false;
        // Colors
        this.green = chalk_1.default.green;
        this.yellow = chalk_1.default.yellow;
        this.red = chalk_1.default.red;
        this.cyan = chalk_1.default.cyan;
    }
    ;
    /**
     * Removes the Color from all the Log Levels
     * @type {void}
     */
    NoColor() {
        this.noColor = true;
    }
    ;
    /**
     * Removes the Prefix from all the Log Levels
     * @type {void}
     */
    NoPrefix() {
        this.noPrefix = true;
    }
    ;
    /**
     * Adds the Prefix to all the Log Levels
     * @type {void}
     */
    AddPrefix() {
        this.noPrefix = false;
    }
    ;
    /**
     * Add's Color to all the Log Levels
     * @type {void}
     */
    AddColor() {
        this.noColor = false;
    }
    ;
    // Loggers
    /**
     * Basic Log, Prefix: [LOG]
     * @param  {...any} args
     */
    log(...args) {
        if (this.noPrefix) {
            console.log(this.logNoColor(args));
        }
        else {
            console.log('[LOG] ' + this.logNoColor(args));
        }
    }
    ;
    /**
     * Log Info, Color: Green, Prefix: [INFO]
     * @param  {...any} args
     */
    info(...args) {
        if (this.noColor) {
            if (this.noPrefix) {
                console.log(this.logNoColor(args));
            }
            else {
                console.log('[INFO] ' + this.logNoColor(args));
            }
        }
        else {
            if (this.noPrefix) {
                console.log(this.green(args));
            }
            else {
                console.log(this.base.bgGreen('[INFO]') + ' ' + this.green(args));
            }
        }
        ;
    }
    ;
    /**
     * Log Warn, Color: Yellow, Prefix: [INFO]
     * @param  {...any} args
     */
    warn(...args) {
        if (this.noColor) {
            if (this.noPrefix) {
                console.log(this.logNoColor(args));
            }
            else {
                console.log('[WARN] ' + this.logNoColor(args));
            }
        }
        else {
            if (this.noPrefix) {
                console.log(this.yellow(args));
            }
            else {
                console.log(this.base.bgYellow('[WARN]') + ' ' + this.yellow(args));
            }
        }
        ;
    }
    ;
    /**
     * Log Error, Color: Red, Prefix: [ERROR]
     * @param  {...any} args
     */
    error(...args) {
        if (this.noColor) {
            if (this.noPrefix) {
                console.log(this.logNoColor(args));
            }
            else {
                console.log('[ERROR] ' + this.logNoColor(args));
            }
        }
        else {
            if (this.noPrefix) {
                console.log(this.red(args));
            }
            else {
                console.log(this.base.bgRed('[ERROR]') + ' ' + this.red(args));
            }
        }
        ;
    }
    ;
    /**
     * Log Debug, Color: Cyan, Prefix: [DEBUG]
     * @param  {...any} args
     */
    debug(...args) {
        if (this.noColor) {
            if (this.noPrefix) {
                console.log(this.logNoColor(args));
            }
            else {
                console.log('[DEBUG] ' + this.logNoColor(args));
            }
        }
        else {
            if (this.noPrefix) {
                console.log(this.cyan(args));
            }
            else {
                console.log(this.base.bgCyan('[DEBUG]') + ' ' + this.cyan(args));
            }
        }
        ;
    }
    ;
}
;
const logger = new Logger();
module.exports = logger;
