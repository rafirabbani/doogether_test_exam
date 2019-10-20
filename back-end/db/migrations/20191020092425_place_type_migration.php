<?php

use Phinx\Migration\AbstractMigration;

class PlaceTypeMigration extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    addCustomColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Any other destructive changes will result in an error when trying to
     * rollback the migration.
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {                    
        $refTable = $this -> table('place');
        $refTable -> addColumn('place_name', 'string', ['limit' => 50])
                  -> addColumn('place_address', 'string', ['limit' => 50])
                  -> addColumn('place_region', 'string', ['limit' => 50])
                  -> addColumn('place_price', 'integer')
                  -> addColumn('place_open', 'time')
                  -> addColumn('place_close', 'time')
                  -> addColumn('place_type', 'string', ['limit' => 50])
                  -> create();
    }
   
}
