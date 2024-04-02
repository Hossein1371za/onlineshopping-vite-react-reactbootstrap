import React from 'react'

const SelectedCategoty = (select) => {
  return (
    <select>
        <option value="all">همه ی محصولات</option>
        <option value="shoes">کتونی</option>
        <option value="pants">شلوار</option>
        <option value="boot">چکمه</option>
        <option value="bag">کیف</option>
        <option value="cap">کلاه</option>
        <option value="electiric">الکترونیک</option>
        <option value="phone">گوشی</option>
        <option value="restaurant">رستوران</option>
        <option value="event">رویداد</option>
        <option value="univercity">دانشگاه</option>
        <option value="headphone">هدفون</option>
    </select>
  )
}

export default SelectedCategoty