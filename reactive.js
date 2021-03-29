function reactive(target,effect){

    const dep = new Set();

    track();
    function track(){
        dep.add(effect)
    }


    function trigger(target){
       dep.forEach(effect=>effect(target))
    }

    const handler={

        get: function(target,value,receiver){
            return Reflect.get(...arguments);
        },

        set: function(target){
            trigger(target);
            return Reflect.set(...arguments);
        }
    }

    return new Proxy(target,handler);

}



export default reactive;