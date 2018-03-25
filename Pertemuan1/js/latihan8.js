/*
8. Menghitung digit 'no_telpon' max 12 karakter 
menggunakan prompt bila lebih dari 12 maka tampilkan notif
dan inputannya pun tidak boleh kosong.
*/

var noTelp = prompt('Register NO. Telp Anda?')
if(noTelp.length < 1) 
{
	alert('No Telp tidak boleh kosong')
} 
else if(noTelp.length > 12) 
{
	alert('Maximal 12 karakter')
} 

else if(noTelp.length < 12) 
{
	alert('Minimal 12 karakter')
} 

else 
{
	alert('Success NO. Telp anda telah terdaftar..')
}

/* --------- Mendapatkan 5 Point untuk yg bisa mengerjakan. --------- */