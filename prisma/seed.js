
import bcrypt from 'bcryptjs';

try {
    process.loadEnvFile();
} catch {
    console.error('   ❌ arquivo .env não encontrado');
    process.exit(1);
}

const { criptografar } = await import('../src/lib/cripto.js');
const { prisma } = await import('../src/lib/prisma.js');

// para ter mais linhas no banco, acrescente mais objetos em cada lista/tabela

const dados = {
    usuario: [
        { nome: 'carlos', senha: bcrypt.hashSync('carlos123', 10) },
        { nome: 'ana', senha: bcrypt.hashSync('ana456', 10) },
        { nome: 'pedro', senha: bcrypt.hashSync('pedro789', 10) },
    ],

   cliente: [
    {
        nome: 'Mariana Costa',
        cpf: criptografar('321.654.987-00'),
    },
    {
        nome: 'Rafael Mendes',
        cpf: criptografar('456.789.123-11'),
    },
    {
        nome: 'Camila Ferreira',
        cpf: criptografar('789.123.456-22'),
    },
],

    veiculo: [
        { modelo: 'Honda Civic', placa: 'ABC1D23', cliente_id: 1 },
        { modelo: 'Chevrolet Onix', placa: 'DEF4G56', cliente_id: 2 },
        { modelo: 'Hyundai HB20', placa: 'GHI7J89', cliente_id: 3 },
    ],

    agendamento: [
        { data: new Date('2026-11-15'), veiculo_id: 1 },
        { data: new Date('2026-11-16'), veiculo_id: 2 },
        { data: new Date('2026-11-17'), veiculo_id: 3 },
    ],
};

const tabelas = Object.keys(dados).reverse().join(', ');

await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE ${tabelas} RESTART IDENTITY CASCADE`
);

console.log('   🧹 registros anteriores apagados (ids reiniciados)');

for (const [tabela, data] of Object.entries(dados)) {
    const { count } = await prisma[tabela].createMany({ data });
    console.log(`   ✅ ${tabela}: ${count} registros`);
}

await prisma.$disconnect();
