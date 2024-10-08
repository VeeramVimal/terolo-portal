const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const phoneRegex = /^(?=.*[0-9])[- +()0-9]+$/
const charRegex = /^[a-zA-Z()]+$/
const numChar = /^[a-zA-Z0-9 ]*$/
const twoDecimal = /\d+(\.\d{1,2})?/
const gstValidation = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/
const panValidation = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/
const tanValidation = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
const tinValiation = /(?=^.{0,11}$)(.+)((\r?\n.+)*)/


export const InputFieldValidate = (name, value, isMandatory) => {
    name = name.replace(/[A-Z&]/g, (m) => m.toLowerCase())
    if (value === "" && isMandatory) {
      return { isValid: false, message: `${name} is required ` }
    } else {
      return { isValid: true, message: "" }
    }
  }