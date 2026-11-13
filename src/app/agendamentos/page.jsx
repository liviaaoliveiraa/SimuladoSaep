import { excluir, salvar } from '@actions/agendamentos';
import Crud from '@components/Crud';
import { descriptografar } from '@lib/cripto';
import { prisma } from '@lib/prisma';

const colunas = [
    { title: 'Data', dataIndex: 'data' },
    { title: 'Modelo', dataIndex: 'veiculo_modelo' },
    { title: 'Placa', dataIndex: 'veiculo_placa' },
    { title: 'Cliente', dataIndex: 'cliente_nome' },
    { title: 'CPF', dataIndex: 'cliente_cpf' },
];

export default async function Agendamentos() {
    const [agendamentos, veiculos] = await Promise.all([
        prisma.agendamento.findMany({
            orderBy: { data: 'asc' },
            include: { veiculo: { include: { cliente: true } } },
        }),
        prisma.veiculo.findMany({ orderBy: { modelo: 'asc' }, include: { cliente: true } }),
    ]);

    const registros = agendamentos.map(({ id, data, veiculo_id, veiculo }) => ({
        id,
        veiculo_id,
        data: data.toISOString().slice(0, 10),
        veiculo_modelo: veiculo.modelo,
        veiculo_placa: veiculo.placa,
        cliente_nome: veiculo.cliente.nome,
        cliente_cpf: descriptografar(veiculo.cliente.cpf),
    }));

    const campos = [
        { name: 'data', label: 'Data', tipo: 'date' },
        {
            name: 'veiculo_id',
            label: 'Veículo',
            opcoes: veiculos.map((v) => ({ value: v.id, label: `${v.modelo} (${v.cliente.nome})` })),
        },
    ];

    return <Crud titulo="Agendamentos" {...{ colunas, campos, registros, salvar, excluir }} />;
}