export const genSelect = (): HTMLSelectElement => {
    const select: HTMLSelectElement = document.createElement("select");
    const option:HTMLOptionElement = document.createElement('option')
    const option1:HTMLOptionElement = document.createElement('option')
    const option2:HTMLOptionElement = document.createElement('option')
    const option3:HTMLOptionElement = document.createElement('option')
    const option4:HTMLOptionElement = document.createElement('option')
    option.innerHTML='All'
    option1.innerHTML='1st Generation'
    option2.innerHTML='2nd Generation'
    option3.innerHTML='3rd Generation'
    option4.innerHTML='4th Generation'
    select.appendChild(option)
    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)
    select.appendChild(option4)
    return select
  };