/**
 * Created by SeongJung on 2016-08-24.
 */
"use strict";
function Stack() {
    this.items = [];
}

Stack.prototype.push = function (data) {
    this.items.push(data);
};

Stack.prototype.pop = function () {
    return this.items.pop();
};

Stack.prototype.peek = function () {
    return this.items[this.items.length-1];
};

Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
};

Stack.prototype.clear = function () {
    this.items = [];
};

Stack.prototype.size = function () {
    return this.items.length;
};

Stack.prototype.printStack = function () {
    console.log(this.items.toString());
};