function configMaster($stateProvider) {

    $stateProvider

    /*-----------------------------------------
    mpart~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.mpart', {
        url: "/mpart",
        templateUrl: "views/master/mpart/data.html",
        data: { pageTitle: 'mpart' },
        controller:"master.mpart"
    })

    .state('master.mpart.add', {
        url: "/mpart",
        templateUrl: "views/master/mpart/add.html",
        data: { pageTitle: 'mpart' },
        controller:"master.mpart.add"
    })

    .state('master.mpart.edit', {
        url: "/edit/:id_mpart",
        templateUrl: "views/master/mpart/edit.html",
        data: { pageTitle: 'mpart' },
        controller:"master.mpart.edit"
    })

        .state('master.mpart.detail', {
            url: "/detail/:id_mpart",
            templateUrl: "views/master/mpart/detail.html",
            data: { pageTitle: 'detail' },
            controller:"master.mpart.detail"
        })
        //* ------------------ ROUTINE -------------------*//
        .state('master.mpart.detail.routine', {
            url: "/routine",
            templateUrl: "views/master/mpart/routine/data.html",
            data: { pageTitle: 'routine' },
            controller:"master.mpart.detail.routine"
        })

        .state('master.mpart.detail.routine.add', {
            url: "/add",
            templateUrl: "views/master/mpart/routine/add.html",
            data: { pageTitle: 'add' },
            controller:"master.mpart.detail.routine.add"
        })
        .state('master.mpart.detail.routine.edit', {
            url: "/edit/:id_maintenance",
            templateUrl: "views/master/mpart/routine/edit.html",
            data: { pageTitle: 'edit' },
            controller:"master.mpart.detail.routine.edit"
        })

        //* ------------------ INSPECTION -------------------*//
        // .state('master.mpart.detail.inspection', {
        //     url: "/inspection",
        //     templateUrl: "views/master/mpart/inspection/data.html",
        //     data: { pageTitle: 'inspection' },
        //     controller:"master.mpart.detail.inspection"
        // })
        // .state('master.mpart.detail.inspection.add', {
        //     url: "/add",
        //     templateUrl: "views/master/mpart/inspection/add.html",
        //     data: { pageTitle: 'add' },
        //     controller:"master.mpart.detail.inspection.add"
        // })
        // .state('master.mpart.detail.inspection.edit', {
        //     url: "/edit/:id_maintenance",
        //     templateUrl: "views/master/mpart/inspection/edit.html",
        //     data: { pageTitle: 'edit' },
        //     controller:"master.mpart.detail.inspection.edit"
        // })

    /*-----------------------------------------
     actype~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.actype', {
        url: "/actype",
        templateUrl: "views/master/actype/data.html",
        data: { pageTitle: 'actype' },
        controller:"master.actype"
    })
    .state('master.actype.detail', {
        url: "/detail/:id_actype",
        templateUrl: "views/master/actype/data.detail.html",
        data: { pageTitle: 'actype' },
        controller:"master.actype.detail"
    })
    .state('master.actype.add', {
        url: "/actype",
        templateUrl: "views/master/actype/add.html",
        data: { pageTitle: 'actype' },
        controller:"master.actype.add"
    })

    .state('master.actype.edit', {
        url: "/edit/:id_actype",
        templateUrl: "views/master/actype/edit.html",
        data: { pageTitle: 'actype' },
        controller:"master.actype.edit"
    })

    /*-----------------------------------------
     Aircraft~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.aircraft', {
        url: "/aircraft",
        templateUrl: "views/master/aircraft/data.html",
        data: { pageTitle: 'aircraft' },
        controller:"master.aircraft"
    })
    .state('master.aircraft.detail', {
        url: "/detail/:id_aircraft",
        templateUrl: "views/master/aircraft/data.detail.html",
        data: { pageTitle: 'aircraft' },
        controller:"master.aircraft.detail"
    })
    .state('master.aircraft.add', {
        url: "/aircraft",
        templateUrl: "views/master/aircraft/add.html",
        data: { pageTitle: 'aircraft' },
        controller:"master.aircraft.add"
    })

    .state('master.aircraft.edit', {
        url: "/edit/:id_aircraft",
        templateUrl: "views/master/aircraft/edit.html",
        data: { pageTitle: 'aircraft' },
        controller:"master.aircraft.edit"
    })

    /*-----------------------------------------
     Ata Chapter ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.ata', {
        url: "/ata",
        templateUrl: "views/master/ata/data.html",
        data: { pageTitle: 'ata' },
        controller:"master.ata"
    })
    .state('master.ata.detail', {
        url: "/detail/:id_ata",
        templateUrl: "views/master/ata/data.detail.html",
        data: { pageTitle: 'ata' },
        controller:"master.ata.detail"
    })
    .state('master.ata.add', {
        url: "/ata",
        templateUrl: "views/master/ata/add.html",
        data: { pageTitle: 'ata' },
        controller:"master.ata.add"
    })

    .state('master.ata.edit', {
        url: "/edit/:id_ata",
        templateUrl: "views/master/ata/edit.html",
        data: { pageTitle: 'ata' },
        controller:"master.ata.edit"
    })

    /*-----------------------------------------
     Maintenance Code ~~~~~~~~~~~~~~~~Mulai koding
     /*---------------------------------------*/
        .state('master.maintenance', {
            url: "/maintenance",
            templateUrl: "views/master/maintenance/data.html",
            data: { pageTitle: 'maintenance' },
            controller:"master.maintenance"
        })
        .state('master.maintenance.detail', {
            url: "/detail/:id_maintenance_code",
            templateUrl: "views/master/maintenance/data.detail.html",
            data: { pageTitle: 'maintenance' },
            controller:"master.maintenance.detail"
        })
        .state('master.maintenance.add', {
            url: "/maintenance",
            templateUrl: "views/master/maintenance/add.html",
            data: { pageTitle: 'maintenance' },
            controller:"master.maintenance.add"
        })

        .state('master.maintenance.edit', {
            url: "/edit/:id_maintenance_code",
            templateUrl: "views/master/maintenance/edit.html",
            data: { pageTitle: 'maintenance' },
            controller:"master.maintenance.edit"
        })

    /*-----------------------------------------
    group~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.group', {
        url: "/group",
        templateUrl: "views/master/group/data.html",
        data: { pageTitle: 'group' },
        controller:"master.group"
    })
    .state('master.group.detail', {
        url: "/detail/:id_group",
        templateUrl: "views/master/group/data.detail.html",
        data: { pageTitle: 'group' },
        controller:"master.group.detail"
    })
    .state('master.group.add', {
        url: "/add",
        templateUrl: "views/master/group/add.html",
        data: { pageTitle: 'group' },
        controller:"master.group.add"
    })

    .state('master.group.edit', {
        url: "/edit/:id_group",
        templateUrl: "views/master/group/edit.html",
        data: { pageTitle: 'group' },
        controller:"master.group.edit"
    })

    /*-----------------------------------------
    condition_monitoring~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.condition_monitoring', {
        url: "/condition_monitoring",
        templateUrl: "views/master/condition_monitoring/data.html",
        data: { pageTitle: 'condition_monitoring' },
        controller:"master.condition_monitoring"
    })
    .state('master.condition_monitoring.detail', {
        url: "/detail/:id_condition_monitoring",
        templateUrl: "views/master/condition_monitoring/data.detail.html",
        data: { pageTitle: 'condition_monitoring' },
        controller:"master.condition_monitoring.detail"
    })
    .state('master.condition_monitoring.add', {
        url: "/add",
        templateUrl: "views/master/condition_monitoring/add.html",
        data: { pageTitle: 'condition_monitoring' },
        controller:"master.condition_monitoring.add"
    })

    .state('master.condition_monitoring.edit', {
        url: "/edit/:id_condition_monitoring",
        templateUrl: "views/master/condition_monitoring/edit.html",
        data: { pageTitle: 'condition_monitoring' },
        controller:"master.condition_monitoring.edit"
    })

    /*-----------------------------------------
    life_time_limit~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.life_time_limit', {
        url: "/life_time_limit",
        templateUrl: "views/master/life_time_limit/data.html",
        data: { pageTitle: 'life_time_limit' },
        controller:"master.life_time_limit"
    })
    .state('master.life_time_limit.detail', {
        url: "/detail/:id_life_time_limit",
        templateUrl: "views/master/life_time_limit/data.detail.html",
        data: { pageTitle: 'life_time_limit' },
        controller:"master.life_time_limit.detail"
    })
    .state('master.life_time_limit.add', {
        url: "/add",
        templateUrl: "views/master/life_time_limit/add.html",
        data: { pageTitle: 'life_time_limit' },
        controller:"master.life_time_limit.add"
    })

    .state('master.life_time_limit.edit', {
        url: "/edit/:id_life_time_limit",
        templateUrl: "views/master/life_time_limit/edit.html",
        data: { pageTitle: 'life_time_limit' },
        controller:"master.life_time_limit.edit"
    })

    /*-----------------------------------------
    part_category~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.part_category', {
        url: "/part_category",
        templateUrl: "views/master/part_category/data.html",
        data: { pageTitle: 'part_category' },
        controller:"master.part_category"
    })
    .state('master.part_category.detail', {
        url: "/detail/:id_part_category",
        templateUrl: "views/master/part_category/data.detail.html",
        data: { pageTitle: 'part_category' },
        controller:"master.part_category.detail"
    })
    .state('master.part_category.add', {
        url: "/add",
        templateUrl: "views/master/part_category/add.html",
        data: { pageTitle: 'part_category' },
        controller:"master.part_category.add"
    })

    .state('master.part_category.edit', {
        url: "/edit/:id_part_category",
        templateUrl: "views/master/part_category/edit.html",
        data: { pageTitle: 'part_category' },
        controller:"master.part_category.edit"
    })

    /*-----------------------------------------
    part_condition~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.part_condition', {
        url: "/part_condition",
        templateUrl: "views/master/part_condition/data.html",
        data: { pageTitle: 'part_condition' },
        controller:"master.part_condition"
    })
    .state('master.part_condition.detail', {
        url: "/detail/:id_part_condition",
        templateUrl: "views/master/part_condition/data.detail.html",
        data: { pageTitle: 'part_condition' },
        controller:"master.part_condition.detail"
    })
    .state('master.part_condition.add', {
        url: "/part_condition",
        templateUrl: "views/master/part_condition/add.html",
        data: { pageTitle: 'part_condition' },
        controller:"master.part_condition.add"
    })

    .state('master.part_condition.edit', {
        url: "/edit/:id_part_condition",
        templateUrl: "views/master/part_condition/edit.html",
        data: { pageTitle: 'part_condition' },
        controller:"master.part_condition.edit"
    })

    /*-----------------------------------------
    partid~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.partid', {
        url: "/partid",
        templateUrl: "views/master/partid/data.html",
        data: { pageTitle: 'partid' },
        controller:"master.partid"
    })
    .state('master.partid.detail', {
        url: "/detail/:id_partid",
        templateUrl: "views/master/partid/data.detail.html",
        data: { pageTitle: 'partid' },
        controller:"master.partid.detail"
    })
    .state('master.partid.add', {
        url: "/partid",
        templateUrl: "views/master/partid/add.html",
        data: { pageTitle: 'partid' },
        controller:"master.partid.add"
    })

    .state('master.partid.edit', {
        url: "/edit/:id_partid",
        templateUrl: "views/master/partid/edit.html",
        data: { pageTitle: 'partid' },
        controller:"master.partid.edit"
    })

    /*-----------------------------------------
    position~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.position', {
        url: "/position",
        templateUrl: "views/master/position/data.html",
        data: { pageTitle: 'position' },
        controller:"master.position"
    })
    .state('master.position.detail', {
        url: "/detail/:id_position",
        templateUrl: "views/master/position/data.detail.html",
        data: { pageTitle: 'position' },
        controller:"master.position.detail"
    })
    .state('master.position.add', {
        url: "/position",
        templateUrl: "views/master/position/add.html",
        data: { pageTitle: 'position' },
        controller:"master.position.add"
    })

    .state('master.position.edit', {
        url: "/edit/:id_position",
        templateUrl: "views/master/position/edit.html",
        data: { pageTitle: 'position' },
        controller:"master.position.edit"
    })

    /*-----------------------------------------
    site~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.site', {
        url: "/site",
        templateUrl: "views/master/site/data.html",
        data: { pageTitle: 'site' },
        controller:"master.site"
    })
    .state('master.site.detail', {
        url: "/detail/:id_site",
        templateUrl: "views/master/site/data.detail.html",
        data: { pageTitle: 'site' },
        controller:"master.site.detail"
    })
    .state('master.site.add', {
        url: "/site",
        templateUrl: "views/master/site/add.html",
        data: { pageTitle: 'site' },
        controller:"master.site.add"
    })

    .state('master.site.edit', {
        url: "/edit/:id_site",
        templateUrl: "views/master/site/edit.html",
        data: { pageTitle: 'site' },
        controller:"master.site.edit"
    })

    /*-----------------------------------------
    type_ofwork~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.type_ofwork', {
        url: "/type_ofwork",
        templateUrl: "views/master/type_ofwork/data.html",
        data: { pageTitle: 'type_ofwork' },
        controller:"master.type_ofwork"
    })
    .state('master.type_ofwork.detail', {
        url: "/detail/:id_type_ofwork",
        templateUrl: "views/master/type_ofwork/data.detail.html",
        data: { pageTitle: 'type_ofwork' },
        controller:"master.type_ofwork.detail"
    })
    .state('master.type_ofwork.add', {
        url: "/type_ofwork",
        templateUrl: "views/master/type_ofwork/add.html",
        data: { pageTitle: 'type_ofwork' },
        controller:"master.type_ofwork.add"
    })

    .state('master.type_ofwork.edit', {
        url: "/edit/:id_type_ofwork",
        templateUrl: "views/master/type_ofwork/edit.html",
        data: { pageTitle: 'type_ofwork' },
        controller:"master.type_ofwork.edit"
    })

    /*-----------------------------------------
      Pendidikan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.pendidikan', {
        url: "/pendidikan",
        templateUrl: "views/master/pendidikan/data.html",
        data: { pageTitle: 'pendidikan' },
        controller:"master.pendidikan"
    })
    .state('master.pendidikan.detail', {
        url: "/detail/:id_pendidikan",
        templateUrl: "views/master/pendidikan/data.detail.html",
        data: { pageTitle: 'pendidikan' },
        controller:"master.pendidikan.detail"
    })
    .state('master.pendidikan.add', {
        url: "/create",
        templateUrl: "views/master/pendidikan/add.html",
        data: { pageTitle: 'pendidikan' },
        controller:"master.pendidikan.add"
    })

    .state('master.pendidikan.edit', {
        url: "/edit/:id_pendidikan",
        templateUrl: "views/master/pendidikan/edit.html",
        data: { pageTitle: 'pendidikan' },
        controller:"master.pendidikan.edit"
    })

    /*-----------------------------------------
      Pekerjaan ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.pekerjaan', {
        url: "/pekerjaan",
        templateUrl: "views/master/pekerjaan/data.html",
        data: { pageTitle: 'pekerjaan' },
        controller:"master.pekerjaan"
    })
    .state('master.pekerjaan.detail', {
        url: "/detail/:id_pekerjaan",
        templateUrl: "views/master/pekerjaan/data.detail.html",
        data: { pageTitle: 'pekerjaan' },
        controller:"master.pekerjaan.detail"
    })
    .state('master.pekerjaan.add', {
        url: "/create",
        templateUrl: "views/master/pekerjaan/add.html",
        data: { pageTitle: 'pekerjaan' },
        controller:"master.pekerjaan.add"
    })

    .state('master.pekerjaan.edit', {
        url: "/edit/:id_pekerjaan",
        templateUrl: "views/master/pekerjaan/edit.html",
        data: { pageTitle: 'pekerjaan' },
        controller:"master.pekerjaan.edit"
    })

    /*-----------------------------------------
      Mapel ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.mapel', {
        url: "/mapel",
        templateUrl: "views/master/mapel/data.html",
        data: { pageTitle: 'mapel' },
        controller:"master.mapel"
    })
    .state('master.mapel.detail', {
        url: "/detail/:id_mata_pelajaran",
        templateUrl: "views/master/mapel/data.detail.html",
        data: { pageTitle: 'mapel' },
        controller:"master.mapel.detail"
    })
    .state('master.mapel.add', {
        url: "/create",
        templateUrl: "views/master/mapel/add.html",
        data: { pageTitle: 'mapel' },
        controller:"master.mapel.add"
    })

    .state('master.mapel.edit', {
        url: "/edit/:id_mata_pelajaran",
        templateUrl: "views/master/mapel/edit.html",
        data: { pageTitle: 'mapel' },
        controller:"master.mapel.edit"
    })

    /*-----------------------------------------
      Jenis nilai ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.jn', {
        url: "/jn",
        templateUrl: "views/master/jn/data.html",
        data: { pageTitle: 'jn' },
        controller:"master.jn"
    })
    .state('master.jn.detail', {
        url: "/detail/:id_jenis_nilai",
        templateUrl: "views/master/jn/data.detail.html",
        data: { pageTitle: 'jn' },
        controller:"master.jn.detail"
    })
    .state('master.jn.add', {
        url: "/create",
        templateUrl: "views/master/jn/add.html",
        data: { pageTitle: 'jn' },
        controller:"master.jn.add"
    })

    .state('master.jn.edit', {
        url: "/edit/:id_jenis_nilai",
        templateUrl: "views/master/jn/edit.html",
        data: { pageTitle: 'jn' },
        controller:"master.jn.edit"
    })

    /*-----------------------------------------
      Absen ~~~~~~~~~~~~~~~~Mulai koding
    /*---------------------------------------*/
    .state('master.absen', {
        url: "/absen",
        templateUrl: "views/master/absen/data.html",
        data: { pageTitle: 'absen' },
        controller:"master.absen"
    })
    .state('master.absen.detail', {
        url: "/detail/:id_m_absen",
        templateUrl: "views/master/absen/data.detail.html",
        data: { pageTitle: 'absen' },
        controller:"master.absen.detail"
    })
    .state('master.absen.add', {
        url: "/create",
        templateUrl: "views/master/absen/add.html",
        data: { pageTitle: 'absen' },
        controller:"master.absen.add"
    })

    .state('master.absen.edit', {
        url: "/edit/:id_m_absen",
        templateUrl: "views/master/absen/edit.html",
        data: { pageTitle: 'absen' },
        controller:"master.absen.edit"
    })    

}

angular
    .module('inspinia')
    .config(configMaster)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
