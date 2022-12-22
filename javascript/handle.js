/** @format */

$(function () {
	document.onmousedown = startDrag;
	document.onmouseup = stopDrag;

	let offsetX;
	let offsetY;
	//TODO:Hanlde Start and Stop
	function startDrag(e) {
		let targ = e.target ? e.target : e.srcElement;
		if (targ.className != "child") {
			return;
		}

		offsetX = e.clientX;
		offsetY = e.clientY;

		if (!targ.style.left) {
			targ.style.left = "0px";
		}
		if (!targ.style.top) {
			targ.style.top = "0px";
		}

		coordX = parseInt(targ.style.left);
		coordY = parseInt(targ.style.top);
		drag = true;
		document.onmousemove = dragDiv;
	}
	function stopDrag() {
		drag = false;
	}

	// TODO: Handle dragDiv
	function dragDiv(e) {
		if (!drag) return;
		let targ = e.target ? e.target : e.srcElement;

		coordY + e.clientY - offsetY >= -3232 &&
		coordY + e.clientY - offsetY < 0
			? (targ.style.top = coordY + e.clientY - offsetY + "px")
			: console.log("maxTop or maxBottom");

		coordX + e.clientX - offsetX >= -2634 &&
		coordX + e.clientX - offsetX < 0
			? (targ.style.left = coordX + e.clientX - offsetX + "px")
			: console.log("maxLeft or maxRight");

		return false;
	}
});
