window.addEventListener("DOMContentLoaded", () => {
    let mainSwiper = document.querySelector('.mainSwiper__swiper');

    if(mainSwiper){
        let swiper = new Swiper(mainSwiper, {
            pagination: {
                el: ".mainSwiper__pagination",
              },
        })
    }


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
})