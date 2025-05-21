export function yupToFormErrors(err, refs){
  const errObj = {};
  err.inner.forEach((error) => {
    errObj[error.path] = error.message;
  });

  const firstErrorField = err.inner[0]?.path
  console.log(firstErrorField)
  if (firstErrorField && refs[firstErrorField]?.current) {
    refs[firstErrorField].current.focus()
  }


  return errObj; 
}