
let insert_func = (class_sc, ch_num, ch_name, pdfsrc) => {
    let maindiv = document.createElement('div');
    maindiv.classList.toggle("col-sm-6")
    maindiv.classList.toggle("mb-3")
    maindiv.classList.toggle("mb-sm-0")
    maindiv.innerHTML = `<div class="card mb-3"><div class="card-body" style="background-color: #b3d58c;border-radius:5px;"><h5 class="card-title">CHAPTER-${ch_num}</h5><p class="card-text">${ch_name}</p><a href="${pdfsrc}" class="btn btn-success m-2" style="background-color: #509403;border:none" Download="Ch-${ch_num}(${ch_name})">Download Notes</a></div></div>`
    document.getElementById(`maininsertele${class_sc}th`).append(maindiv);
}

let btnfunc7th = (value) => {
    document.getElementById('firstdivv').innerHTML = '';
    if (value == 7) {
        document.getElementById('secdivv').innerHTML = `<div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo"><h6>Class 7th (science)</h6></button></h2><div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="row" id="maininsertele71th"><!-- add item here --></div></div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><h6>Class 7th (Math)</h6></button></h2><div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="row" id="maininsertele72th"><!-- add item here --></div></div></div></div></div>
        `;
        //insert pdf class 7th
        insert_func(72, "Answers", "Answers of all chapters", `./sourcepdf/class7mathes_expler/Class7Maths13.pdf`);
        let arr8exmath = ['Integers', 'Fractions and Decimals', 'Data Handling', 'Simple Equations', 'Lines and Angles', 'Triangles', 'Comparing Quantities', 'Rational Numbers', 'Perimeter and Area', 'Algebraic Expressions', 'Exponents and Powers', 'Practical Geometry Symmetry and Visualising Solid Shapes', 'Answers'];
        for (let index = 1; index < 13; index++) {
            insert_func(72, index, `${arr8exmath[index - 1]}`, `./sourcepdf/class7mathes_expler/Class7Maths${index}.pdf`);
        }
        insert_func(71, 10, "Electric Current and its effects", "./sourcepdf/C7ch10.pdf");
    }
    else if (value == 8) {
        document.getElementById('secdivv').innerHTML = `<div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree"><h6>Class 8th (Science)</h6></button></h2><div id="collapsethree" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="row" id="maininsertele81th"></div></div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsethree"><h6>Class 8th (Math)</h6></button></h2><div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="row" id="maininsertele82th"></div></div></div></div></div>
        `;
        //insert pdf class 8th
        insert_func(82, "Answers", "Answers of all chapters", `./sourcepdf/class8mathes_expler/Class8Maths14.pdf`);
        let arr8exmath = ['Rational Number', 'Data Handling', 'Square-Square Root and Cube-Cube Root', 'Linear Equations In One Variable', 'Understanding Quadrilaterals and Practical Geometry', 'Visualising The Solid Shapes', 'Algebraic Expression, Identities and Factorisation', 'Exponents and Powers', 'Comparing Quantities', 'Direct and Indirect Proportions', 'Mensuration', 'Introduction To Graphics', 'Playing With Numbers', 'Answers'];
        for (let index = 1; index < 14; index++) {
            insert_func(82, index, `${arr8exmath[index - 1]}`, `./sourcepdf/class8mathes_expler/Class8Maths${index}.pdf`);
        }
        insert_func(81, 2, "Microorganisms : Friend and foe", "./sourcepdf/c8c2.pdf");
        insert_func(81, "4 (Old)", "Electric Current and its effects", "./sourcepdf/C8chmmn.pdf");
    }
}

let backbtn = () => {
    document.getElementById('secdivv').innerHTML = '';
    document.getElementById('firstdivv').innerHTML = `<button class="btn btn-primary" style="height: 200px;width: 40%;border-radius: 20px;" onclick="btnfunc7th(7)">Class 7th</button>
    <button class="btn btn-primary" style="height: 200px;width: 40%;border-radius: 20px;" onclick="btnfunc7th(8)">Class 8th</button>`;
}