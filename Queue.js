/**
 * Created by SeongJung on 2016-08-24.
 */
function Queue() {
    this.items = [];
}

Queue.prototype.enqueue = function (data) {
    this.items.push(data);
};

Queue.prototype.dequeue = function () {
    return this.items.shift();
};

Queue.prototype.front = function () {
    return this.items[0];
};

Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
};

Queue.prototype.size = function () {
    return this.items.length;
};