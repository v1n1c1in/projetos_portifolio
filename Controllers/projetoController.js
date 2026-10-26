import projetoModel from "../Models/projetoModel.js";
export class ProjetoController{
    static async Create(req, res){
        try
        {
            const{nome, descricao, data_inicio, data_fim, tecnologias, observacoes} = req.body;
            if(!nome || !descricao || !data_inicio || !data_fim || !tecnologias || !observacoes){
                return res.status(400).json({message:"Todos os campos são obrigatórios"});
            }
            const novoProjeto = await projetoModel.inserir({
                nome,
                descricao,
                data_inicio,
                data_fim,
                tecnologias,
                observacoes
            })
            return res.status(200).json({message:"Projeto inserido com sucesso", novoProjeto});
        }
        catch(err)
        {
            return res.status(500).json({message:"Problema ao inserir um novo projeto", err});
        }
    }
}