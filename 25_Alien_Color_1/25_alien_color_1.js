"use strict";
/**
 * Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
 * • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
 * • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
 */
Object.defineProperty(exports, "__esModule", { value: true });
// passes the first if, if alien_color is green
var alien_color = 'green';
if (alien_color == 'green') {
    console.log("alien_color: ".concat(alien_color, " : You earned 5 points for shooting the alien"));
}
// fails the second if, if alien_color is not green
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("alien_color: ".concat(alien_color, " : You earned 5 points for shooting the alien"));
}
