// function TypeCheck v1
// verif si arg correspong à arg2
function type_check_v1(variable, type) {
    switch (typeof variable) {
        case "number":
        case "string":
        case "function":
        case "undefined":
        case "boolean":
            return type === typeof variable;
        case "object":
            switch (type) {
                case "null":
                    return variable === null;
                case "array":
                    return Array.isArray(variable);
                default:
                    return variable !== null && !Array.isArray(variable);
            }
    }

    return false;
}

// function TypeCheck v2
function type_check_v2(variable, conf) {
    let subValue
    let key
    for (key of conf) {
        switch (key) {
            case "type":
                if (!type_check_v1(variable, conf.type)) return false;
                break;
            case "value":
                if (JSON.stringify(variable) !== JSON.stringify(conf.value)) return false;
                break;
            case 'enum':
                enum_loop: {
                    for (subValue of conf.enum) {
                        if (type_check_v2(variable, { value: subValue })) {
                            break enum_loop
                        }
                    }
                    return false
                }
        }
    }

    return true;
}

// function TypeCheck V3
export function type_check(variable, conf) {
    for (key of conf) {
        switch (key) {
            case "props":
                for (prop of conf) {
                    if (variable[prop] === undefined)
                        throw new Error("Type properties erreur");
                    if (!type_check(variable[prop], conf.props[prop]))
                        throw new Error("Type properties erreur");
                }
                break;
            case "value":
            case "type":
            case "enum":
                let newConf = {};
                newConf.enum = conf.enum;
                if (!type_check_v2(variable, newConf))
                    throw new Error("Type properties erreur");
                break;
        }
    }

    return true;
}

// fonction prop_access
function prop_access(obj, path) {
    if(typeof(obj) !== "object" || obj === null ) {
        return path + " not exist";
    }
    if (typeof path != "string" ||  path === "") {
        return obj;
    }
    let err = '';
    path.split('.').map(chld => typeof obj[chld] === 'null' && err === 'null' ? err = path.split(chld)[0] + chld + "no exist " : obj = obj[chld]);
    return obj;

}