import { excluir, salvar } from '@actions/veiculos';
import Crud from '@components/Crud';
import { prisma } from '@lib/prisma';

const colunas = [
    { title: 'Modelo', dataIndex: 'modelo' },
    { title: 'Placa', dataIndex: 'placa' },
    { title: 'Cliente', dataIndex: 'cliente_nome' },
];

export default async function Veiculos() {
    const [veiculos, clientes] = await Promise.all([
        prisma.veiculo.findMany({ orderBy: { modelo: 'asc' }, include: { cliente: true } }),
        prisma.cliente.findMany({ orderBy: { nome: 'asc' } }),
    ]);

    const registros = veiculos.map(({ cliente, ...veiculo }) => ({ ...veiculo, cliente_nome: cliente.nome }));

    const campos = [
        { name: 'modelo', label: 'Modelo' },
        { name: 'placa', label: 'Placa', opcional: true },
        { name: 'cliente_id', label: 'Cliente', opcoes: clientes.map((c) => ({ value: c.id, label: c.nome })) },
    ];

    return <Crud titulo="Veículos" {...{ colunas, campos, registros, salvar, excluir }} />;
}