const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const incidents = await connection('incidents').select('*'); 
        return response.json(incidents);
    },

    async create(request, response){
        const {title, description, value} = request.body;
        
        const ong_id = request.headers.Authorization;
        
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
    
        return response.json({ id });
    },

    async delete(request, response){
        const {title, description, value} = request.body;
        
        const ong_id = request.headers.Authorization;

        await connection('incidents').delete({
            
        })
    }


}