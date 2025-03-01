import { Admin } from '../../app/models/index.js';
import { logger } from '../helpers/logger/index.js';
import { config } from '../server/index.js';

const seedAdmin = async () => {
    try {

        const adminData = {
            name: "Admin",
            email: config.SEEDER.EMAIL,
            password: config.SEEDER.PASSWORD,
            role: config.SEEDER.ROLE,
        };

        const adminExists = await Admin.findOne({ email: adminData.email });
        if (!adminExists) {
            await Admin.create({ ...adminData });
            logger.log("info", "Admin data seeded successfully.");
        } else {
            logger.log("info", "Admin data already exists.");
        }
    } catch (error) {
        logger.log("error", `Error seeding admin data: ${error instanceof Error ? error.message : 'unknown'}`);
    }
};

export default seedAdmin;