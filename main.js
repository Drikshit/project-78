var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

    var images =
    ["https://www.google.com/search?rlz=1C1UEAD_enIN955IN956&sxsrf=ALeKk00704VtkQ8IuCVW7jc7awsOu9nHcA:1625129966491&q=Groot&stick=H4sIAAAAAAAAAONgFuLSz9U3KKosNygzUAKzjUzj84rLtCSyk6300zJzcsGEVXJGYlFicklqUfEjxlxugZc_7glLpUxac_IaYxwXTqVCdlxsrnklmSWVQnJcfFJIVmkwSPFwIfGNRLh49dP1DQ2zzbLTk4uKSwSOrprFaMWkwcSziJXVvSg_v2QCGyMAXWwZQ68AAAA&sa=X&ved=2ahUKEwi73vbywMHxAhXHZSsKHaGOAKoQ-BYwNnoECAEQMw&biw=1536&bih=754#",
"https://www.google.com/search?sa=X&rlz=1C1UEAD_enIN955IN956&biw=1536&bih=754&sxsrf=ALeKk01wR4_dB3XLA9pJny46CoQee6flTg:1625129970286&q=Rocket+Raccoon&stick=H4sIAAAAAAAAAONgFuLSz9U3KKosNygzUOIEsS0MSnKMtCSyk6300zJzcsGEVXJGYlFicklqUfEjxlxugZc_7glLpUxac_IaYxwXTqVCdlxsrnklmSWVQnJcfFJINmkwSPFwIfGNRLh49dP1DQ2zzbLTk4uKSwSOrprFaMWkwcSziJUvKD85O7VEISgxOTk_P28CGyMACIkPCbcAAAA&ved=2ahUKEwiHxN70wMHxAhXEbCsKHUnODTkQ-BYwOXoECAEQOQ",
"https://www.google.com/search?sa=X&rlz=1C1UEAD_enIN955IN956&biw=1536&bih=754&sxsrf=ALeKk01wR4_dB3XLA9pJny46CoQee6flTg:1625129970286&q=Thanos&stick=H4sIAAAAAAAAAONgFuLSz9U3KKosNygzUOIEsY2N49OytSSyk6300zJzcsGEVXJGYlFicklqUfEjxlxugZc_7glLpUxac_IaYxwXTqVCdlxsrnklmSWVQnJcfFJINmkwSPFwIfGNRLh49dP1DQ2zzbLTk4uKSwSOrprFaMWkwcSziJUtJCMxL794AhsjANOg_oOvAAAA&ved=2ahUKEwiHxN70wMHxAhXEbCsKHUnODTkQ-BYwPHoECAEQQg",
"https://www.google.com/search?sa=X&rlz=1C1UEAD_enIN955IN956&biw=1536&bih=754&sxsrf=ALeKk01wR4_dB3XLA9pJny46CoQee6flTg:1625129970286&q=Ronan+the+Accuser&stick=H4sIAAAAAAAAAONgFuLSz9U3KKosNygzUOIEsS1SilIKtCSyk6300zJzcsGEVXJGYlFicklqUfEjxlxugZc_7glLpUxac_IaYxwXTqVCdlxsrnklmSWVQnJcfFJINmkwSPFwIfGNRLh49dP1DQ2zzbLTk4uKSwSOrprFaMWkwcSziFUwKD8vMU-hJCNVwTE5ubQ4tWgCGyMA0_H0f7oAAAA&ved=2ahUKEwiHxN70wMHxAhXEbCsKHUnODTkQ-BYwPXoECAEQRQ",
"https://www.google.com/search?sa=X&rlz=1C1UEAD_enIN955IN956&biw=1536&bih=754&sxsrf=ALeKk01wR4_dB3XLA9pJny46CoQee6flTg:1625129970286&q=nebula+marvel&stick=H4sIAAAAAAAAAONgFuLSz9U3KKosNygzUOIEsdONjbNytSSyk6300zJzcsGEVXJGYlFicklqUfEjxlxugZc_7glLpUxac_IaYxwXTqVCdlxsrnklmSWVQnJcfFJINmkwSPFwIfGNRLh49dP1DQ2zzbLTk4uKSwSOrprFaMWkwcSziJU3LzWpNCdRITexqCw1ZwIbIwAUB6xctgAAAA&ved=2ahUKEwiHxN70wMHxAhXEbCsKHUnODTkQ-BYwPnoECAEQSA"];
 
var names = [ "familybook","groot","rocket racoon","thanos","ronan","nebula"]
}