window.addEventListener("DOMContentLoaded", () => {
    let mainSwiper = document.querySelector('.mainSwiper__swiper');

    if(mainSwiper){
        let swiper = new Swiper(mainSwiper, {
            pagination: {
                el: ".mainSwiper__pagination",
              },
        })
    }
    
    let cardDetailSwiper = document.querySelector('.cardDetail__swiper');

    if(cardDetailSwiper){

      let cardDetailSwiperTh = document.querySelector('.cardDetail__swiperTh');
    
      let swiper2 = new Swiper(cardDetailSwiperTh, {
          slidesPerView: 4,
          direction: 'vertical',
          spaceBetween: 15,
      })

        let swiper = new Swiper(cardDetailSwiper, {
            slidesPerView: 1,
            direction: 'vertical',
            thumbs: {
              swiper: swiper2,
            }
        })
    }

    let reletedProductsSwiper = document.querySelector('.reletedProducts__swiper');

    if(reletedProductsSwiper){

      let swiper = new Swiper(reletedProductsSwiper, {
          slidesPerView: 5,
          spaceBetween: 25,
          pagination: {
            el: '.reletedProducts__pagination',
          }, breakpoints: {
            992: {
              slidesPerView: 5,
              spaceBetween: 25,
            }, 
            768: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
          }
      })
    }


    Fancybox.bind("[data-fancybox]", {
    })

    let modTitle = document.querySelectorAll('.modal__title>a');

    if(modTitle){
      modTitle.forEach((link) => {
        link.addEventListener('click', () =>{
          Fancybox.close();
        })
      })
    }
    let arrGallery = ['.cardDetail__swiperSlide'];

    function initGallery(){
        for(let i = 0; i < arrGallery.length; i++){
            if (document.querySelector(arrGallery[i])) {
                Fancybox.bind(arrGallery[i], {
                    groupAll: true,
                })
            }
        }
    }

    initGallery()

    let plantsSort = document.querySelector('.plants__sort');

    if(plantsSort){
      plantsSort.addEventListener('click', () => {
        plantsSort.classList.toggle('active')
      })
      let items = plantsSort.querySelectorAll('.plants__sortList-item');
      items.forEach((el) => {
        el.addEventListener('click', () => {
          let val = el.innerHTML;
          plantsSort.querySelector('.typeSorting').innerHTML = val;
        })
      })
    }



    let filterCheck = document.querySelectorAll('.filPar');

    if(filterCheck){
      filterCheck.forEach((item) => {
        item.querySelector('.filAcc').addEventListener('click', () =>{
          $(item).find('.filter__choise').slideToggle().css('display', 'flex');
          item.querySelector('.filter__flex-arrow').classList.toggle('rotate')
          $(item).find('.filter__noUiWrap').slideToggle().css('display', 'flex');
        });

      })
    }
    
    let accordeon = document.querySelectorAll('.accordeon__title');

    if(accordeon){
      accordeon.forEach((item) => {
        item.addEventListener('click', () =>{
          $(item).next().slideToggle();
          item.querySelector('img').classList.toggle('rotate')
        });

      })
    }

    let slider = document.getElementById('slider');
    
    if (slider){
      let minVal = document.querySelector('.min');
      let maxVal = document.querySelector('.max');

      noUiSlider.create(slider, {
          start: [39, 1230],
          connect: true,
          range: {
              'min': 0,
              'max': 2000,
          },
          format: wNumb({
            decimals: 0,
        })
      });

      slider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
          maxVal.innerHTML = "$" + values[handle];
        } else {
          minVal.innerHTML = "$" + values[handle];
        }
      });

    }

    let ten = document.querySelectorAll('.filter__choise');
    if (ten) {

        ten.forEach((item) => {
          if($(item).find('.filter__choiseLabel').length <= 9){
            $(item).find('.filter__choiseShowHihhen').hide()
          } else{
            $(item).find('.filter__choiseShowHihhen').show()
          }
          

          $(item).find('.filter__choiseLabel').slice(10).hide();
          $(item).find('.filter__choiseShowHihhen').on('click',function() {
            let hidden =  $(item).find('.filter__choiseLabel:hidden');
            if(hidden.length > 0) {
              // для вывода нескольких элементов еще один параметр
              // hidden.slice(0, 2).slideDown();
              hidden.slice(0).slideDown();
              $(item).find('.filter__choiseShowHihhen').html('Скрыть');
            } else {
              $(item).find('.filter__choiseLabel').slice(10).slideUp();
              $(item).find('.filter__choiseShowHihhen').html('Показать еще');
            }
          })

        })
    }

    function tabs(dataTab, dataInfo, className){
      let targetMap1 = document.querySelectorAll(`[${dataTab}]`),
          map1 = document.querySelectorAll(`.${className}`)

      targetMap1?.forEach(elem => {
          elem.addEventListener('click', function (e) {
              e.preventDefault()
              let target = this.getAttribute(`${dataTab}`)
              map1.forEach(elem => {
                  elem.classList.remove(`${className}--opacity`, `${className}--display`)
              })

              targetMap1.forEach(elem => {
                  elem.classList.remove('active')
              })
              this.classList.add('active')

              let cat = document.querySelectorAll(`[${dataInfo}='${target}']`)

              cat.forEach(elem => {
                  elem.classList.add(`${className}--display`)
                  console.log(elem.className);
                  setTimeout(() => {
                      elem.classList.add(`${className}--opacity`)
                  }, 400)
              })
          })
      })
  }

  if(document.querySelector('.prodDescription__wrapper')){
      tabs('data-tabp', 'data-infop', 'prodDescription__wrapper');
  }


  $(document).ready(function() {
    $('.townSelect').select2({
      placeholder: 'Select a country / region',
    });
  });
  $(document).ready(function() {
    $('.stateSelect').select2({
      placeholder: 'Select a state',
    });
  });


    
  const phone = document.querySelectorAll('[name="phone"]')
  if (phone) {
      phone.forEach(element => {
          const maskOptions = {
              mask: '+{7}(000) 000-00-00',
          }
          const mask = IMask(element, maskOptions)
      })
  }
})