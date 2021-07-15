interface String {
    format(...args:any[]);
}

String.prototype.format = function(...args:any[]) {
    this.replace(/{(\d+)}/g, (match, index) => args[index].toString() || '');
}