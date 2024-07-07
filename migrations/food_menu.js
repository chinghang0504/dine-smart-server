/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  // Create a food_types schema
  return knex.schema.createTable('food_types', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('type').notNullable().unique();
    table.string('image').notNullable().defaultTo('');
    table.integer('priority');
  })
    .then(() => {
      // Create a food_items schema
      return knex.schema.createTable('food_items', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
        table.string('name').notNullable().unique();
        table.text('description').notNullable().defaultTo('');
        table.decimal('price', 10, 2).notNullable().defaultTo(0.0);
        table.string('image').notNullable().defaultTo('');
        table.integer('priority');
        table.string('type')
          .notNullable()
          .references('type')
          .inTable('food_types')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  // Delete the food_items schema
  return knex.schema.dropTableIfExists('food_items')
    .then(() => {
      // Delete the food_types schema
      return knex.schema.dropTableIfExists('food_types');
    });
}
