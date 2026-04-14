const carros = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2022,
        cor: 'Prata',
        preco: 142500,
        descricao: 'Sedan confiavel, economico e ideal para uso diario.',
        thumb: 'https://www.webmotors.com.br/wp-content/uploads/2026/02/27173928/Cadillac-Escalade-2026.webp',
    },
    {
        id: 2,
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2021,
        cor: 'Preto',
        preco: 138900,
        descricao: 'Sedan com bom desempenho, conforto e acabamento refinado.',
        thumb: 'https://www.webmotors.com.br/wp-content/uploads/2026/02/27173928/Cadillac-Escalade-2026.webp',
    },
    {
        id: 3,
        marca: 'Chevrolet',
        modelo: 'Onix',
        ano: 2023,
        cor: 'Branco',
        preco: 89490,
        descricao: 'Hatch compacto com tecnologia moderna e baixo consumo.',
        thumb: 'https://www.webmotors.com.br/wp-content/uploads/2026/02/27173928/Cadillac-Escalade-2026.webp',
    },
    {
        id: 4,
        marca: 'Volkswagen',
        modelo: 'Nivus',
        ano: 2024,
        cor: 'Azul',
        preco: 126300,
        descricao: 'SUV urbano com visual esportivo e conectividade avancada.',
        thumb: 'https://www.webmotors.com.br/wp-content/uploads/2026/02/27173928/Cadillac-Escalade-2026.webp',
    },
    {
        id: 5,
        marca: 'Hyundai',
        modelo: 'Creta',
        ano: 2023,
        cor: 'Cinza',
        preco: 134990,
        descricao: 'SUV versatil com espaco interno e conforto para familia.',
        thumb: 'https://www.webmotors.com.br/wp-content/uploads/2026/02/27173928/Cadillac-Escalade-2026.webp',
    },
    {
        id: 6,
        marca: 'fiat',
        modelo: 'touro',
        ano: 2020,
        cor: 'azul',
        preco: 164990,
        descricao: 'Picape robusta com boa capacidade de carga e tracao forte.',
        thumb: 'https://www.webmotors.com.br/wp-content/uploads/2026/02/27173928/Cadillac-Escalade-2026.webp',
    },
];

const recomendacoes = [
    {
        id: 1,
        nome: 'Lucas Andrade',
        cidade: 'Sao Paulo',
        carroRecomendado: 'Toyota Corolla',
        comentario: 'Otimo para uso diario e muito confortavel na estrada.',
        nota: 5,
    },
    {
        id: 2,
        nome: 'Mariana Souza',
        cidade: 'Campinas',
        carroRecomendado: 'Honda Civic',
        comentario: 'Bom desempenho e acabamento interno excelente.',
        nota: 5,
    },
    {
        id: 3,
        nome: 'Rafael Lima',
        cidade: 'Curitiba',
        carroRecomendado: 'Chevrolet Onix',
        comentario: 'Economico e com tecnologia que ajuda no dia a dia.',
        nota: 4,
    },
    {
        id: 4,
        nome: 'Fernanda Rocha',
        cidade: 'Belo Horizonte',
        carroRecomendado: 'Volkswagen Nivus',
        comentario: 'Visual moderno e dirigibilidade muito boa na cidade.',
        nota: 4,
    },
    {
        id: 5,
        nome: 'Gustavo Mendes',
        cidade: 'Rio de Janeiro',
        carroRecomendado: 'Hyundai Creta',
        comentario: 'Espacoso, confortavel e ideal para viagens em familia.',
        nota: 5,
    },
];

const listaCarros = document.getElementById('lista-carros');
const listaRecomendacoes = document.getElementById('lista-recomendacoes');

carros.forEach((carro) => {
    const coluna = document.createElement('article');
    coluna.className = 'col-12 col-md-6 col-lg-4';

    coluna.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${carro.thumb}" class="card-img-top" alt="${carro.marca} ${carro.modelo}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${carro.marca} ${carro.modelo}</h5>
        <p class="card-text">${carro.descricao}</p>
        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item"><strong>Ano:</strong> ${carro.ano}</li>
          <li class="list-group-item"><strong>Cor:</strong> ${carro.cor}</li>
        </ul>
        <p class="fw-semibold mt-auto mb-3">Preco: R$ ${carro.preco.toLocaleString('pt-BR')}</p>
        <button class="btn btn-success w-100" type="button">Comprar</button>
      </div>
    </div>
  `;

    listaCarros.appendChild(coluna);
});

recomendacoes.forEach((recomendacao) => {
    const coluna = document.createElement('article');
    coluna.className = 'col-12 col-md-6';

    coluna.innerHTML = `
    <div class="card h-100 border-secondary-subtle">
      <div class="card-body">
        <h5 class="card-title mb-1">${recomendacao.nome}</h5>
        <p class="text-body-secondary mb-2">${recomendacao.cidade}</p>
        <p class="mb-2"><strong>Recomenda:</strong> ${recomendacao.carroRecomendado}</p>
        <p class="card-text">"${recomendacao.comentario}"</p>
        <span class="badge text-bg-primary mt-3">Nota ${recomendacao.nota}/5</span>
      </div>
    </div>
  `;

    listaRecomendacoes.appendChild(coluna);
});
