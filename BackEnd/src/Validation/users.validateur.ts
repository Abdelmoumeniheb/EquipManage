import { isEmpty } from "./isEmpty";
const Validator = require("validator");
module.exports= function ValidateUser(data){
let errors:any={};
data.Email=!isEmpty(data.Email)?data.Email:'';
data.Lastname=!isEmpty(data.Lastname)?data.Lastname:'';
data.Firstname=!isEmpty(data.Firstname)?data.Firstname:'';
data.Departement=!isEmpty(data.Departement)?data.Departement:'';
if(!Validator.isEmail(data.Email)){
    errors.Email="Email is invalid";
}
if(Validator.isEmpty(data.id)){
    errors.Lastname="id is required";
}
if(Validator.isEmpty(data.Lastname)){
    errors.Lastname="Lastname is required";
}
if(Validator.isEmpty(data.Firstname)){
    errors.Firstname="Firstname is required";
}
return {
    errors,
    isValid:isEmpty(errors)
}
}