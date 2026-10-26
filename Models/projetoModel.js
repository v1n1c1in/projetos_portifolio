import db from "../db/conn.js";
export default class ProjetoModel{
    static async inserir(projeto){
        const{nome, 
              descricao, 
              data_inicio, 
              data_fim, 
              tecnologias,
              observacoes} = projeto;
        const query = `Insert INTO projetos (nome, 
                                            descricao, 
                                            data_inicio, 
                                            data_fim, 
                                            tecnologias, 
                                            observacoes)
                            Values(?,?,?,?,?,?)`;
        const [resultado] = await db.execute(query, [
            nome,
            descricao,
            data_inicio,
            data_fim,
            tecnologias,
            observacoes
        ]);
        return {id: resultado.insertId, ...projeto};

    }
}