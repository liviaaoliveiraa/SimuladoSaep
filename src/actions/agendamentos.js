'use server';

import { prisma } from '@lib/prisma';
import { revalidatePath } from 'next/cache';

export async function salvar({ id, data, ...dados }) {
    try {
        // 1. registro = dados COM data = CONVERTER data PARA Date   (o formulário manda texto, o banco quer data)

        // 2. SE TEM id → AGUARDAR prisma ATUALIZAR entidade3 ONDE id, COM data: registro    (é uma edição)
        //    SENÃO      → AGUARDAR prisma CRIAR entidade3 COM data: registro                (é um cadastro novo)
        //    (o "data:" aqui é a opção do prisma, não o campo data da entidade3)
    } catch {
        return { erro: 'Erro ao salvar a entidade3' };
    }
    revalidatePath('/entidade3');
}

export async function excluir(id) {
    try {
        // 3. AGUARDAR prisma EXCLUIR entidade3
    } catch {
        return { erro: 'Erro ao excluir a entidade3' };
    }
    revalidatePath('/entidade3');
}
