// ==UserScript==
// @name        gmail-insert-Lottery-iPod
// @namespace   tiberis-lottery
// @description Интернет-гипермаркет сварочного оборудования Тиберис проводит лотерею среди своих Клиентов.
// @include     https://mail.google.com/*
// @include     http://mail.google.com/*
// @version     1.2
// @grant       none
// ==/UserScript==



function getIFrameXML(iframe) {
	var doc=iframe.contentDocument;
	if (!doc && iframe.contentWindow) doc=iframe.contentWindow.document;
	if (!doc) doc=window.frames[iframe.id].document;
	if (!doc) return null;
	if (doc.location=="about:blank") return null;
	if (doc.XMLDocument) doc=doc.XMLDocument;
	return doc;
}

// hi there! script by Di_Skyer [SkyShell studio]

function tib_insert_text(emag) {
	console.log(emag);

	if (document.getElementsByClassName("vN")[0]) {
		var email = document.getElementsByClassName("vN")[0].getAttribute('email');
	} else {
		var email = document.getElementsByClassName("gD")[0].getAttribute('email');
	}

	if (emag == 'tiberis') {
		var tib_site = 'http://www.tiberis.ru/pages/client?hash=';
	} else
	if (emag == 'resanta') {
		var tib_site = 'http://resanta.tiberis.ru/pages/client?hash=';
	}
	var lottery_offer = '<div>Интернет-гипермаркет сварочного оборудования Тиберис проводит лотерею среди своих Клиентов. Победитель получит замечательный и очень удобный планшетный компьютер от Apple: <b>iPad Mini White 16Gb Wi-Fi + Cellular!</b></div><br><div>Все, что Вам нужно, чтобы принять участие в лотерее, кликнуть на ссылку ниже. Ваши имейл будет автоматически внесен в список участников лотереи.</div><div><br><a href="' + tib_site + email + '" title="Перейти на наш сайт для регистрации в лотерее"><b>'+ tib_site + email +'</b></a><br><br></div><div>В лотерее участвуют все Клиенты интернет-гипермаркета сварочного оборудования Тиберис, купившие у нас товар или просто обращавшиеся за консультацией или ценовым предложением.</div>';

	//alert(lottery_offer);

	if (document.getElementsByClassName('iN')[0].getElementsByClassName('Ap')[0].getElementsByClassName('Ar')[1].getElementsByClassName('Am')[0].getElementsByTagName('iframe')[0]) {
		var insert_iframe = document.getElementsByClassName('iN')[0].getElementsByClassName('Ap')[0].getElementsByClassName('Ar')[1].getElementsByClassName('Am')[0].getElementsByTagName('iframe')[0];
	} else {
		var insert_iframe = document.getElementsByClassName('Ap')[0].getElementsByClassName('Ar')[1].getElementsByClassName('Am')[0].getElementsByTagName('iframe')[0];
	}
	if (insert_iframe) {
		//alert('0###  '+insert_iframe.innerHTML);

		body_iframe = getIFrameXML(insert_iframe);

		body_iframe.body.innerHTML = lottery_offer + '<br>' + body_iframe.body.innerHTML;
		//body_iframe.insertAdjacentHTML('afterBegin', 'TTTTTRRTTTTTSTSSAAAA');

	} else alert('tiberis-script error');

}




document.onkeydown = function(e) {
	e = e || event;
	if (e.ctrlKey && e.shiftKey && e.keyCode == '1'.charCodeAt(0)) {
		tib_insert_text('tiberis');
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.keyCode == '2'.charCodeAt(0)) {
		tib_insert_text('resanta');
		return false;
	}
}
