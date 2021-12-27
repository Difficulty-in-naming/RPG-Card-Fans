String.prototype.format = function (...args) {
    this.replace(/{(\d+)}/g, (match, index) => args[index].toString() || '');
};
//# sourceMappingURL=String_Ext.js.map