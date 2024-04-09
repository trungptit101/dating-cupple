import { RegEmail, RegPhoneNumber, RegWebsite } from '@/constants/regex'

export const validatePassword = (
  rule: Function,
  value: string,
  callback: Function
) => {
  if (value?.trim() === '') {
    callback(new Error('Mật khẩu là bắt buộc'))
  } else if (value?.trim().length < 6) {
    callback(new Error('Mật khẩu ít nhất 6 kí tự'))
  } else {
    callback()
  }
}

export const validateEmailRequired = (
  rule: Function,
  value: string,
  callback: Function
) => {
  if (value?.trim() === '') {
    callback(new Error('Email là bắt buộc'))
  } else if (!RegEmail.test(value?.trim())) {
    callback(new Error('Email không đúng định dạng'))
  } else {
    callback()
  }
}

export const validateEmailNoRequired = (
  rule: Function,
  value: string,
  callback: Function
) => {
  if (value?.trim() && !RegEmail.test(value?.trim())) {
    callback(new Error('Email không đúng định dạng'))
  } else {
    callback()
  }
}

export const validatePhoneNumberNoRequired = (
  rule: Function,
  value: string,
  callback: Function
) => {
  if (value?.trim() && !RegPhoneNumber.test(value?.trim())) {
    callback(new Error('SĐT không đúng định dạng'))
  } else {
    callback()
  }
}

export const validatePhoneNumberRequired = (
  rule: Function,
  value: string,
  callback: Function
) => {
  if (value?.trim() === '') {
    callback(new Error('SĐT là bắt buộc'))
  } else if (!RegPhoneNumber.test(value?.trim())) {
    callback(new Error('SĐT không đúng định dạng'))
  } else {
    callback()
  }
}

export const validateWebsiteNoRequired = (
  rule: Function,
  value: string,
  callback: Function
) => {
  if (value?.trim() && !RegWebsite.test(value?.trim())) {
    callback(new Error('Đường dẫn không đúng định dạng'))
  } else {
    callback()
  }
}

export const validateWebsiteRequired = (
  rule: Function,
  value: string,
  callback: Function
) => {
  if (value?.trim() === '') {
    callback(new Error('Đường dẫn là bắt buộc'))
  } else if (!RegWebsite.test(value?.trim())) {
    callback(new Error('Đường dẫn không đúng định dạng'))
  } else {
    callback()
  }
}

export const ruleEmail = ({
  required,
  trigger,
}: {
  required: boolean
  trigger: 'change' | 'blur'
}) => {
  return {
    required,
    validator: required ? validateEmailRequired : validateEmailNoRequired,
    trigger: trigger || 'change',
  }
}

export const rulePassword = ({
  required,

  trigger,
}: {
  required: boolean
  trigger: 'change' | 'blur'
}) => {
  return {
    required,
    validator: validatePassword,
    trigger: trigger || 'change',
  }
}

export const rulePhoneNumber = ({
  required,
  trigger,
}: {
  required: boolean
  trigger: 'change' | 'blur'
}) => {
  return {
    required,
    validator: required
      ? validatePhoneNumberRequired
      : validatePhoneNumberNoRequired,
    trigger: trigger || 'change',
  }
}

export const ruleWebsite = ({
  required,
  trigger = 'change',
}: {
  required: boolean
  trigger?: 'change' | 'blur'
}) => {
  return {
    required,
    validator: required ? validateWebsiteRequired : validateWebsiteNoRequired,
    trigger,
  }
}

export const ruleRequired = ({
  required,
  message,
  trigger,
}: {
  required: boolean
  message: string
  trigger?: 'change' | 'blur'
}) => {
  return {
    required,
    message,
    trigger: trigger || 'blur',
  }
}
export const ruleRequiredTrim = ({
  required,
  message,
  trigger,
}: {
  required: boolean
  message: string
  trigger?: 'change' | 'blur'
}) => {
  return {
    required,
    message,
    validator: validateTrim,
    trigger: trigger || 'blur',
  }
}
export const validateTrim = (
  rule: Function,
  value: string,
  callback: Function
) => {
  if (value?.trim() === '') {
    callback(new Error(''))
  } else {
    callback()
  }
}
export const ruleMinMax = ({
  min,
  max,
  message,
  trigger,
}: {
  min: number
  max: number
  message: string
  trigger: 'change' | 'blur'
}) => {
  return { min, max, message, trigger: trigger || 'change' }
}
