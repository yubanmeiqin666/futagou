$('.expandListUl').hide()

$('.foldButton').click(function(){
    if($('.expandListUl').css('display')==='none'){
        $('.expandListUl').slideDown()
        $('.foldButton').transition({rotate:'90deg'})
    }else{
        $('.expandListUl').slideUp()
        $('.foldButton').transition({rotate:'0deg'})
    }
})