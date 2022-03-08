const myOBJECT={
foo:"BAR",
func:function(){
    const self = this;
    console.log("outer func: this.foo"+this.foo);
    console.log("outerfunc:self.foo="+this.foo);
    (function(){
        console.log("innerfunction:this.foo="+this.foo);
        console.log("inner func:self.foo="+self.foo)
    }());
}

};