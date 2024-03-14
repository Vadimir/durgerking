body {
	margin: 0;
	padding: 0;
	font-size: 18px;
	color: var(--tg-theme-text-color);
	background: var(--tg-theme-bg-color);
}


.container {
	max-width: 390px;

	margin-left: 5%;
}

.inner {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 200px 200px 200px;
}

.img {
	width: 110px;
}

.item {
	margin-bottom:10px;
}
.header{
	margin-bottom: 10px;
}
.name {
	align: left;
	margin-right: 5px;
}
.price {
	align: right;
	margin-left:5px;
}

.btn {
	margin-top:10px;
	display: inline-block;

	padding: 10px 20px;
	border: none;
	background: rgb(248, 168, 24);
	border-radius: 10px;
	color: #fff;
	text-transform: uppercase;
	font-weight: 700;

	transition: background .2s linear;
}

.btn:hover {
	background: lightgreen;
}
.btn_plus {
	margin-top:10px;
	display: inline-block;
	margin-left: 1%;
	align: right;
	padding: 10px 10px;
	border: none;
	background: rgb(60, 170, 0);
	border-radius: 10px;
	color: #fff;
	text-transform: uppercase;
	font-weight: 700;

	transition: background .2s linear;
}

.btn_plus:hover {
	background: rgb(60, 252, 0);
}
.btn_minus {
	margin-top:10px;
	display: inline-block;
	margin-right: 1%;
	align: left;
	padding: 10px 10px;
	border: none;
	background: rgb(251, 106, 0);
	border-radius: 10px;
	color: #fff;
	text-transform: uppercase;
	font-weight: 700;

	transition: background .2s linear;
}

.btn_minus:hover {
	background: rgb(251, 192, 0);
}

.usercard {
	text-align: center;
}
.hidden {
    display: none;
}