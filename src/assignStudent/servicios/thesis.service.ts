import { InjectRepository } from "@nestjs/typeorm";
import { Thesis } from "src/entities/Thesis.entity";
import { Repository } from "typeorm";
import { CreateThesisDto } from "../dto/create-thesis.dto";

export class ThesisService{
    constructor(
        @InjectRepository(Thesis)
        private readonly thesisRepository:Repository<Thesis>
    ) {}

    async createThesis(createThesisDto:CreateThesisDto){
        const newThesis = this.thesisRepository.create(createThesisDto)
        return await this.thesisRepository.save(newThesis);
    }

}