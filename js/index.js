	var body=document.getElementById("root");
	
	var h1=document.createElement("h1");
	h1.textContent="Resume";
	body.appendChild(h1);


	var main=document.createElement("section");
	main.classList.add("main");
	body.appendChild(main);

	var leftSide=document.createElement("article");
	leftSide.classList.add("leftSide");
	main.appendChild(leftSide);

	var image=document.createElement("section");
	image.classList.add("image");
	leftSide.appendChild(image);
	var img=document.createElement("img");
	img.src="image/avatar.svg";
	img.alt="Rajyalakshmi profile";

	image.appendChild(img);

	leftSide.appendChild(document.createElement("hr"));

	var profile=document.createElement("section");
	profile.classList.add("profile");
	leftSide.appendChild(profile);

	var name1=document.createElement("h2");
	name1.textContent="Rajyalakshmi";
	profile.appendChild(name1);

	var phone=document.createElement("h4");
	phone.textContent="+91 9704 122 768";
	profile.appendChild(phone);

	var email=document.createElement("h4");
	email.textContent="raajivvit@gmail.com";
	profile.appendChild(email);

	leftSide.appendChild(document.createElement("hr"));

	var address=document.createElement("section");
	address.classList.add("address");
	leftSide.appendChild(address);

	var gname1=document.createElement("p");
	gname1.textContent="W/O. Dr. T. K. Rao";
	address.appendChild(gname1);

	var flat=document.createElement("p");
	flat.textContent="F. No: 402, B Block";
	address.appendChild(flat);

	var street=document.createElement("p");
	street.textContent="Brindavan Apartment";
	address.appendChild(street);

	var city=document.createElement("p");
	city.textContent="Tenali";
	address.appendChild(city);

	var district=document.createElement("p");
	district.textContent="Guntur-522201";
	address.appendChild(district);

	var rightSide=document.createElement("article");
	rightSide.classList.add("rightSide");
	main.appendChild(rightSide);

	var co=document.createElement("section");
	co.classList.add("co");
	rightSide.appendChild(co);

	var coj=document.createElement("h3");
	coj.textContent="Career Objective:";
	co.appendChild(coj);

	var obj=document.createElement("h4");
	obj.textContent="-To Work in a meaningful and challenging position that enables me to develop myself as a professional and permit scope for advancement";
	co.appendChild(obj);

	rightSide.appendChild(document.createElement("hr"));

	var ed=document.createElement("section");
	ed.classList.add("ed");
	rightSide.appendChild(ed);

	var ed1=document.createElement("h3");
	ed1.textContent="Education:";
	ed.appendChild(ed1);

	var u=document.createElement("ul");
	u.classList.add("u");
	ed.appendChild(u);

	var i1=document.createElement("li");
	i1.textContent="Completed B.Tech from JNTU in 2006";
	u.appendChild(i1);

	var i2=document.createElement("li");
	i2.textContent="Completed M.Tech from JNTUA in 2011";
	u.appendChild(i2);

	var i3=document.createElement("li");
	i3.textContent="Awarded PhD from SPMVV in 2018";
	u.appendChild(i3);

	rightSide.appendChild(document.createElement("hr"));

	var we=document.createElement("section");
	we.classList.add("we");
	rightSide.appendChild(we);

	var we1=document.createElement("h3");
	we1.textContent="Work Experience:";
	we.appendChild(we1);

	var u=document.createElement("ul");
	u.classList.add("u");
	we.appendChild(u);

	var l1=document.createElement("li");
	l1.textContent="2017- tilldate: working as an Associate Professor in VVIT, Namburu";
	u.appendChild(l1);

	var l2=document.createElement("li");
	l2.textContent="2014-2017: worked as a Assoc.Prof in CEC, Chirala";
	u.appendChild(l2);

	var l3=document.createElement("li");
	l3.textContent="2011-2014: worked as a Assoc.Prof in PBRVITS, Kavali";
	u.appendChild(l3);

	var l4=document.createElement("li");
	l4.textContent="2007-2010: worked as a Asst.Prof in PBRVITS, Kavali";
	u.appendChild(l4);

	var l5=document.createElement("li");
	l5.textContent="2006-2007: worked as a Asst.Prof in MLEC, Singarayakonda";
	u.appendChild(l4);

	rightSide.appendChild(document.createElement("hr"));


	var st=document.createElement("section");
	st.classList.add("st");
	rightSide.appendChild(st);

	var st1=document.createElement("h3");
	st1.textContent="Subjects Taught:";
	st.appendChild(st1);

	var u1=document.createElement("ul");
	u1.classList.add("u1");
	st.appendChild(u1);

	var l11=document.createElement("li");
	l11.textContent="Big Data Analytics";
	u1.appendChild(l11);

	var l22=document.createElement("li");
	l22.textContent="JAVA, ADVANCED JAVA, WEB TECHNOLOGIES";
	u1.appendChild(l22);

	var l33=document.createElement("li");
	l33.textContent=" AI, Python Programming, FLAT and,CD";
	u1.appendChild(l33);

	rightSide.appendChild(document.createElement("hr"));

	var p=document.createElement("section");
	p.classList.add("p");
	rightSide.appendChild(p);

	var p1=document.createElement("h3");
	p1.textContent="Publications:";
	p.appendChild(p1);

	var u11=document.createElement("ul");
	u11.classList.add("u11");
	p.appendChild(u11);

	var l111=document.createElement("li");
	l111.textContent="Journals:5";
	u11.appendChild(l111);

	var l222=document.createElement("li");
	l222.textContent="Conferences:2";
	u11.appendChild(l222);




		