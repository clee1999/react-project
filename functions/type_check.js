export function type_check_v1(variable, type) {
  const typeOfVariable = typeof variable
  switch (typeOfVariable) {
    case 'object':
      switch (type) {
        case 'null':
          return variable === null
        case 'array':
          return Array.isArray(variable)
        case 'object':
          return variable !== null && !Array.isArray(variable)
        default:
          return false
      }
    default:
      return typeOfVariable === type
  }
}

const conf = {
  type: 'number',
}

export function type_check_v2(variable, conf) {
  let key
  let subValue
  for (key in conf) {
    switch (key) {
      case 'type':
        if (!type_check_v1(variable, conf.type)) return false
        break
      case 'value':
        if (JSON.stringify(variable) !== JSON.stringify(conf.value))
          return false
        break
      //
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
  return true
}

console.log(
  type_check_v2(
    { prop1: 'test' },
    { type: 'object', properties: { prop2: { value: 'string' } } }
  )
)

//Type check function
// tagOrComponent : div ==> string
//props : {"toWhat":{"name":"World"}}
// children : ["Hello {{toWhat.name}}"]

//ex
// type_check(
//   { prop1: 'test' },
//   { type: 'object', properties: { prop1: { type: 'string' } } }
// ) ==> true

// type_check(
//   { prop1: 'test' },
//   { type: 'object', properties: { prop2: { value: 'string' } } }
// ) ==> false

// Jeu de tests pour type_check
// console.log(type_check(1, { type: "number", value: 1 }) === true);
// console.log(type_check(1, { type: "number", value: 3 }) === false);
// console.log(type_check(1, { type: "object", value: 1 }) === false);
// console.log(
//   type_check("string", { type: "string", enum: ["string1", "string2"] }) ===
//     false
// );
// console.log(
//   type_check({ bar: "foo" }, { type: "object", value: { bar: "foo" } }) === true
// );
// console.log(
//   type_check({ bar: "foo" }, { type: "object", value: { bar: "value" } }) ===
//     false
// );
// console.log(
//   type_check(
//     {
//       toto: {
//         fi: 3,
//         fa: {
//           trim: " test ",
//         },
//       },
//     },
//     {
//       type: "object",
//       properties: {
//         toto: {
//           type: "object",
//           properties: {
//             fi: { value: 3 },
//             fa: { enum: [3, "string", { trim: " test " }] },
//           },
//         },
//       },
//     }
//   ) === true
// );
