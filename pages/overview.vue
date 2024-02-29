<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "Overview | Fichua",
});
const route = useRoute();

const pageNameCapitalized = computed(() => {
  return route.name
    ? route.name.toString().charAt(0).toUpperCase() +
        route.name.toString().slice(1)
    : "";
});
</script>


<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!-- Header -->
    <!-- ---------------------------------------------- -->
    <!-- Breadcrumb -->
    <a-breadcrumb style="height: 40px; display: flex; align-items: center">
      <a-breadcrumb-item style="color: #5f8524; font-weight: 600"
        >Dashboard</a-breadcrumb-item
      >
      <a-breadcrumb-item>{{ pageNameCapitalized }}</a-breadcrumb-item>
    </a-breadcrumb>

    <a-space direction="vertical" style="width: 100%">
      <a-row
        :gutter="[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]"
      >
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <a-page-header
            title="Overview"
            sub-title="Description of how the system works"
            :ghost="false"
          >
            <!-- <template #extra>
              <a-button key="1" type="primary" :color="'#5f8524'">
                Create User
              </a-button>
            </template> -->
          </a-page-header>
        </a-col>
      </a-row>
    </a-space>

    <a-row
      :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]"
    >
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="For citizens" style="margin-top: 20px">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae
            quisquam totam sed voluptatibus asperiores nesciunt delectus in sunt
            voluptate officia iusto dolorem harum autem, magni quia ex dolore.
            Soluta sapiente quis cupiditate eos sequi! Debitis modi officiis
            magni similique inventore quam possimus porro obcaecati accusantium?
            Deserunt natus beatae molestiae consequuntur mollitia, eius fugiat
            est debitis pariatur esse ex inventore expedita accusantium eos
            temporibus nihil minus quidem. Illum quia qui accusamus ex
            veritatis, eveniet reprehenderit hic repellat ad eligendi dolorum
            voluptas est maxime ducimus deleniti, perspiciatis corrupti iure
            dolores expedita pariatur doloribus exercitationem commodi incidunt
            optio! Ipsam facere nobis, magni aliquid consequatur delectus
            repellendus quasi a dolore doloremque ipsa unde deserunt quam odio
            odit architecto! Libero natus odit obcaecati dicta quasi animi
            nostrum cumque magni neque adipisci voluptate laudantium ex
            repudiandae necessitatibus assumenda soluta consequatur repellat,
            modi velit aut aspernatur, quibusdam commodi id aperiam? Eveniet
            animi doloribus dolorem delectus molestias.
          </p>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="For officers" style="margin-top: 20px">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae
          quisquam totam sed voluptatibus asperiores nesciunt delectus in sunt
          voluptate officia iusto dolorem harum autem, magni quia ex dolore.
          Soluta sapiente quis cupiditate eos sequi! Debitis modi officiis magni
          similique inventore quam possimus porro obcaecati accusantium?
          Deserunt natus beatae molestiae consequuntur mollitia, eius fugiat est
          debitis pariatur esse ex inventore expedita accusantium eos temporibus
          nihil minus quidem. Illum quia qui accusamus ex veritatis, eveniet
          reprehenderit hic repellat ad eligendi dolorum voluptas est maxime
          ducimus deleniti, perspiciatis corrupti iure dolores expedita pariatur
          doloribus exercitationem commodi incidunt optio! Ipsam facere nobis,
          magni aliquid consequatur delectus repellendus quasi a dolore
          doloremque ipsa unde deserunt quam odio odit architecto! Libero natus
          odit obcaecati dicta quasi animi nostrum cumque magni neque adipisci
          voluptate laudantium ex repudiandae necessitatibus assumenda soluta
          consequatur repellat, modi velit aut aspernatur, quibusdam commodi id
          aperiam? Eveniet animi doloribus dolorem delectus molestias.
        </a-card>
      </a-col>
    </a-row>

    <a-row
      :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]"
    >
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="For super admin" style="margin-top: 20px">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae
            quisquam totam sed voluptatibus asperiores nesciunt delectus in sunt
            voluptate officia iusto dolorem harum autem, magni quia ex dolore.
            Soluta sapiente quis cupiditate eos sequi! Debitis modi officiis
            magni similique inventore quam possimus porro obcaecati accusantium?
            Deserunt natus beatae molestiae consequuntur mollitia, eius fugiat
            est debitis pariatur esse ex inventore expedita accusantium eos
            temporibus nihil minus quidem. Illum quia qui accusamus ex
            veritatis, eveniet reprehenderit hic repellat ad eligendi dolorum
            voluptas est maxime ducimus deleniti, perspiciatis corrupti iure
            dolores expedita pariatur doloribus exercitationem commodi incidunt
            optio! Ipsam facere nobis, magni aliquid consequatur delectus
            repellendus quasi a dolore doloremque ipsa unde deserunt quam odio
            odit architecto! Libero natus odit obcaecati dicta quasi animi
            nostrum cumque magni neque adipisci voluptate laudantium ex
            repudiandae necessitatibus assumenda soluta consequatur repellat,
            modi velit aut aspernatur, quibusdam commodi id aperiam? Eveniet
            animi doloribus dolorem delectus molestias.
          </p>
        </a-card>
      </a-col>
      <!-- <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="For officers" style="margin-top: 20px">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae
          quisquam totam sed voluptatibus asperiores nesciunt delectus in sunt
          voluptate officia iusto dolorem harum autem, magni quia ex dolore.
          Soluta sapiente quis cupiditate eos sequi! Debitis modi officiis magni
          similique inventore quam possimus porro obcaecati accusantium?
          Deserunt natus beatae molestiae consequuntur mollitia, eius fugiat est
          debitis pariatur esse ex inventore expedita accusantium eos temporibus
          nihil minus quidem. Illum quia qui accusamus ex veritatis, eveniet
          reprehenderit hic repellat ad eligendi dolorum voluptas est maxime
          ducimus deleniti, perspiciatis corrupti iure dolores expedita pariatur
          doloribus exercitationem commodi incidunt optio! Ipsam facere nobis,
          magni aliquid consequatur delectus repellendus quasi a dolore
          doloremque ipsa unde deserunt quam odio odit architecto! Libero natus
          odit obcaecati dicta quasi animi nostrum cumque magni neque adipisci
          voluptate laudantium ex repudiandae necessitatibus assumenda soluta
          consequatur repellat, modi velit aut aspernatur, quibusdam commodi id
          aperiam? Eveniet animi doloribus dolorem delectus molestias.
        </a-card>
      </a-col> -->
    </a-row>
  </div>
</template>
