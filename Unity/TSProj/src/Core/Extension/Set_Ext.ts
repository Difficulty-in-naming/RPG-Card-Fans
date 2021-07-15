interface Set<T> {
    addRange(collection : T[]);
    addRange(collection : Set<T>);
}

Set.prototype.addRange = function(collection){
    collection.forEach((t)=>this.add(t));
}
