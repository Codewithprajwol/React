# Learning-React
## STATE VS PROP

### STATE
 - state is basically used inside the components and is mutable (i.e. it's value can be changed or updated).
 - it can be used only inside the components and whenever state is called it re-render the components.

 ### Prop
 - Prop is basically a function argument that is used on the parent component and is immutable (ie. it's value shouldn't be changed as it can be changed but react don't recommand to do that).

- it also re-render the components whenever any props are changed or addeded

# React Fragments
- React Fragments are used when there are two elements when returning the function or components...it will give error as it should be wrapped under single element ...so creating other extra html element is not good so, we use React Fragments.

# Children Props 
- while returning component from another component we can use same syntax like html syntax (opening and closing tag). and between these closing and opening tag we can use function, object, normal string etc which also can be accessed form that returning component function through children prop.
(it's easy)

