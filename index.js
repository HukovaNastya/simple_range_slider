const range = document.getElementById('range');
range.addEventListener('input', e =>{
  let value = +e.target.value;
  let label = e.target.nextElementSibling;
  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  label.innerHTML = value; 
});
