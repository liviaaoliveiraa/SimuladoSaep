'use server';

import { prisma } from '@lib/prisma';
import { revalidatePath } from 'next/cache';

export async function salvar({ id, data, ...dados }) {
    try {
        const registro = { ...dados, data: new Date(data) };
        if (id) await prisma.agendamento.update({ where: { id }, data: registro });
        else await prisma.agendamento.create({ data: registro });
    } catch {
        return { erro: 'Erro ao salvar o agendamento' };
    }
    revalidatePath('/agendamentos');
}

export async function excluir(id) {
    try {
        await prisma.agendamento.delete({ where: { id } });
    } catch {
        return { erro: 'Erro ao excluir o agendamento' };
    }
    revalidatePath('/agendamentos');
}