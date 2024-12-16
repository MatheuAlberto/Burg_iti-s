var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        // when window width is >= 320px
        850: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        // when window width is >= 480px
        400: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        // when window width is >= 640px
        360: {
          slidesPerView: 2,
          spaceBetween: 15,
          
        }
      }
  });

// Animação de fixado na tela footer
const target = document.getElementById('card');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                target.classList.add('fixed');
            } else {
                target.classList.remove('fixed');
            }
        });
    },
    { threshold: 0.1 } // 10% do elemento visível para ativar
);

observer.observe(target);

// animação footer carro de compra
var footer = window.document.getElementById('card')
footer.addEventListener('click', clicou)
function clicou() {
    icone_footer.style.animation = 'carro_indo 2s linear forwards'
    footer.style.backgroundColor = '#54CC0A'
    modal_fundo.style.display = 'block'
    modal_container.style.display = 'block'

}

// Horário Aberto ou Fechado
function aberto_ou_fechado() {
    var agora = new Date()
    var hora = agora.getHours()
    return hora > 18 && hora < 23;
}
const isopen = aberto_ou_fechado()

if (!isopen) {
    hora_header.style.backgroundColor = '#54CC0A'
    fechado.style.display = 'none'

} else {
    hora_header.style.backgroundColor = 'red'
    fechado.style.display = 'block'
    fechado.innerHTML = 'Estabelecimento Fechado'
    fechado.style.margin = '13px 0 0 0'
}


// Listagem dos itens que apareceram dentro do Modal
let cart = []
let itens = []

// Adicionar as informações no Modal do produto que foi clicado
var especificações_do_produto1 = window.document.getElementsByClassName('txt_icone_main')[0]
especificações_do_produto1.addEventListener('click', function () {
    if (especificações_do_produto1) {
        const name = especificações_do_produto1.getAttribute('data-name')
        const price = Number(especificações_do_produto1.getAttribute('data-price'))

        // Adicionar no carrinho
        cart_item(name, price)
    }
        especificações_do_produto1.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto1.style.animation = '';
        },500)
        
})
var especificações_do_produto2 = window.document.getElementsByClassName('txt_icone_main')[1]
especificações_do_produto2.addEventListener('click', function () {
    if (especificações_do_produto2) {
        const name = especificações_do_produto2.getAttribute('data-name')
        const price = Number(especificações_do_produto2.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto2.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto2.style.animation = '';
        },500)
})
var especificações_do_produto3 = window.document.getElementsByClassName('txt_icone_main')[2]
especificações_do_produto3.addEventListener('click', function () {
    if (especificações_do_produto3) {
        const name = especificações_do_produto3.getAttribute('data-name')
        const price = Number(especificações_do_produto3.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto3.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto3.style.animation = '';
        },500)
})
var especificações_do_produto4 = window.document.getElementsByClassName('txt_icone_main')[3]
especificações_do_produto4.addEventListener('click', function () {
    if (especificações_do_produto4) {
        const name = especificações_do_produto4.getAttribute('data-name')
        const price = Number(especificações_do_produto4.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto4.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto4.style.animation = '';
        },500)
})
var especificações_do_produto5 = window.document.getElementsByClassName('txt_icone_main')[4]
especificações_do_produto5.addEventListener('click', function () {
    if (especificações_do_produto5) {
        const name = especificações_do_produto5.getAttribute('data-name')
        const price = Number(especificações_do_produto5.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto5.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto5.style.animation = '';
        },500)
})
var especificações_do_produto6 = window.document.getElementsByClassName('txt_icone_main')[5]
especificações_do_produto6.addEventListener('click', function () {
    if (especificações_do_produto6) {
        const name = especificações_do_produto6.getAttribute('data-name')
        const price = Number(especificações_do_produto6.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto6.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto6.style.animation = '';
        },500)
})
var especificações_do_produto7 = window.document.getElementsByClassName('txt_icone_main')[6]
especificações_do_produto7.addEventListener('click', function () {
    if (especificações_do_produto7) {
        const name = especificações_do_produto7.getAttribute('data-name')
        const price = Number(especificações_do_produto7.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto7.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto7.style.animation = '';
        },500)
})
var especificações_do_produto8 = window.document.getElementsByClassName('txt_icone_main')[7]
especificações_do_produto8.addEventListener('click', function () {
    if (especificações_do_produto8) {
        const name = especificações_do_produto8.getAttribute('data-name')
        const price = Number(especificações_do_produto8.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto8.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto8.style.animation = '';
        },500)
})
var especificações_do_produto9 = window.document.getElementsByClassName('txt_icone_main')[8]
especificações_do_produto9.addEventListener('click', function () {
    if (especificações_do_produto9) {
        const name = especificações_do_produto9.getAttribute('data-name')
        const price = Number(especificações_do_produto9.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto9.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto9.style.animation = '';
        },500)
})
var especificações_do_produto10 = window.document.getElementsByClassName('txt_icone_main')[9]
especificações_do_produto10.addEventListener('click', function () {
    if (especificações_do_produto10) {
        const name = especificações_do_produto10.getAttribute('data-name')
        const price = Number(especificações_do_produto10.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto10.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto10.style.animation = '';
        },500)
})
//Bebidas
var especificações_do_produto11 = window.document.getElementsByClassName('txt_icone_main')[10]
especificações_do_produto11.addEventListener('click', function () {
    if (especificações_do_produto11) {
        const name = especificações_do_produto11.getAttribute('data-name')
        const price = Number(especificações_do_produto11.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto11.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto11.style.animation = '';
        },500)
})
var especificações_do_produto12 = window.document.getElementsByClassName('txt_icone_main')[11]
especificações_do_produto12.addEventListener('click', function () {
    if (especificações_do_produto12) {
        const name = especificações_do_produto12.getAttribute('data-name')
        const price = Number(especificações_do_produto12.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto12.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto12.style.animation = '';
        },500)
})
var especificações_do_produto13 = window.document.getElementsByClassName('txt_icone_main')[12]
especificações_do_produto13.addEventListener('click', function () {
    if (especificações_do_produto13) {
        const name = especificações_do_produto13.getAttribute('data-name')
        const price = Number(especificações_do_produto13.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto13.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto13.style.animation = '';
        },500)
})
var especificações_do_produto14 = window.document.getElementsByClassName('txt_icone_main')[13]
especificações_do_produto14.addEventListener('click', function () {
    if (especificações_do_produto14) {
        const name = especificações_do_produto14.getAttribute('data-name')
        const price = Number(especificações_do_produto14.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto14.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto14.style.animation = '';
        },500)
})
var especificações_do_produto15 = window.document.getElementsByClassName('txt_icone_main')[14]
especificações_do_produto15.addEventListener('click', function () {
    if (especificações_do_produto15) {
        const name = especificações_do_produto15.getAttribute('data-name')
        const price = Number(especificações_do_produto15.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto15.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto15.style.animation = '';
        },500)
})
var especificações_do_produto16 = window.document.getElementsByClassName('txt_icone_main')[15]
especificações_do_produto16.addEventListener('click', function () {
    if (especificações_do_produto16) {
        const name = especificações_do_produto16.getAttribute('data-name')
        const price = Number(especificações_do_produto16.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto16.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto16.style.animation = '';
        },500)
})
var especificações_do_produto17 = window.document.getElementsByClassName('txt_icone_main')[16]
especificações_do_produto17.addEventListener('click', function () {
    if (especificações_do_produto17) {
        const name = especificações_do_produto17.getAttribute('data-name')
        const price = Number(especificações_do_produto17.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto17.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto17.style.animation = '';
        },500)
})
var especificações_do_produto18 = window.document.getElementsByClassName('txt_icone_main')[17]
especificações_do_produto18.addEventListener('click', function () {
    if (especificações_do_produto18) {
        const name = especificações_do_produto18.getAttribute('data-name')
        const price = Number(especificações_do_produto18.getAttribute('data-price'))

        cart_item(name, price)
    }
    especificações_do_produto18.style.animation = 'pusando_card 0.7s linear'
        setTimeout(()=>{
            especificações_do_produto18.style.animation = '';
        },500)
})

function addItem(name, price) {
    const existingItem = itens.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        itens.push({ name, price, quantity: 1, total });
    }

}

//Função onde adicionará as informações de compra
function cart_item(name, price) {
    const existe_item = cart.find(item => item.name === name)
    total = 0
    addItem(name, price)
    if (existe_item) {
        existe_item.quantity += 1;
    } else
        cart.push({ name, price, quantity: 1, total})
    updateCartModal()

}

// Atualizar o carrinho do MODAL
var Informacao_itens_modal = window.document.getElementById('cart_items')
function updateCartModal() {
    Informacao_itens_modal.innerHTML = '';
    let total = 0;
    let quant = 0;
    cart.forEach(item => {
        const Informacao_itens_modal_element = document.createElement('div');

        Informacao_itens_modal_element.innerHTML = `
            <div id="container_pai_Modal">
                <div>
                    <p style="margin-bottom: 2px;" ><strong>${item.name}</strong></p>
                    <p id="testt" style="margin: 0;">Qtd: <strong>${item.quantity}</strong></p>
                    <p>Valor Unitário do Item: <strong>${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p>
                </div>

                <div>
                    <div class="remover_item" data-name="${item.name}">
                        Remover
                    </div>
                </div>
            </div>
        `


        Informacao_itens_modal.appendChild(Informacao_itens_modal_element)
        total += item.price * item.quantity
        quant += item.quantity

    })


    cart_total.textContent = `${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`

    cont_footer.innerHTML = `( ${quant} )`
}

//Função remover o item do Modal
Informacao_itens_modal.addEventListener("click", function (event) {
    if (event.target.classList.contains("remover_item")) {
        const name = event.target.getAttribute("data-name")

        removerItemCart(name)

    }
})

function removerItemCart(name) {
    const index = cart.findIndex(item => item.name === name)

    if (index !== -1) {
        const item = cart[index]
        if (item.quantity > 1) {
            item.quantity -= 1
            updateCartModal()
            return;
        }

        cart.splice(index, 1)
        updateCartModal()
    }
}


// Sair do carrinho | MODAL
var sair_da_compra = window.document.getElementById('sair')
sair_da_compra.addEventListener('click', sair_compra)
function sair_compra() {
    icone_footer.style.animation = 'carro_voltando 2s linear forwards'
    footer.style.backgroundColor = 'red'
    modal_fundo.style.display = 'none'
    modal_container.style.display = 'none'
}
// Sair do carrinho clicando fora no background transparente | MODAL
var sair_atraves_background = window.document.getElementById("modal_fundo")
sair_atraves_background.addEventListener('click', function () {
    icone_footer.style.animation = 'carro_voltando 2s linear forwards'
    footer.style.backgroundColor = 'red'
    modal_fundo.style.display = 'none'
    modal_container.style.display = 'none'
})
const quadra = document.getElementById('qd')
const bloco = document.getElementById('blc') 

const casa = document.getElementById('casa')
casa.addEventListener('change', ()=>{
    quadra.disabled = casa.checked
    bloco.disabled = casa.checked
})



//Endereço.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('endereco_form');
    form.addEventListener('submit', handleFormSubmit);
});
//Finalizar pedido
function handleFormSubmit(event) {
    event.preventDefault();

    const isopen = aberto_ou_fechado()
    
    if (isopen) {
        Toastify({
            text: "A HAMBURGARIA ESTÁ FECHADA",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ef4444",
            },
        }).showToast()
        return;
    }

    if (cart.length === 0) {
        Toastify({
            text: "ADICIONE ALGO NO CARRINHO",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ef4444",
            },
        }).showToast()
        return;
    }

    const form = event.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    const messageCardapio = generateFormattedString(data)

    const messageFinal = encodeURIComponent(messageCardapio)
    const phone = '+5596991531417'

    window.open(`https://wa.me/${phone}?text=${messageFinal}`, '_blank')

}
function generateFormattedString(dataForm) {
   let total = 0;
    const formattedString = itens.map(item => {
        total += item.price*item.quantity;
        return`*${item.name}*\nPreço: R$${item.price} | Quantidade: ${item.quantity}\n\n`
    }).join('');
    
    const Objeto_mensagem = {
        '*Endereço:*\n':dataForm.macapaba1, 
        'Qd': dataForm.quadra,
        'Blc': dataForm.bloco,
        'N°/Apt': dataForm.Apartamento
    }
    const menssagem = Object.entries(Objeto_mensagem)
    .filter(([key, value]) => value)
    .map(([key, value]) => `${key} ${value}`)
    .join(', ');
    return `${menssagem}\n\n${formattedString}\n*Total:* ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n\n *OBS: Não realizamos entregas para QD 4 em diante*`;
}

function retornaMenssagem() {
    let form = this.window.document.getElementById('endereco_form')
    const formData = new FormData(form);
    console.log('função retorna menssagem', formData)
}


