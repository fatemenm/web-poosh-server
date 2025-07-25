import type { Struct, Schema } from '@strapi/strapi';

export interface ProductColorImages extends Struct.ComponentSchema {
  collectionName: 'components_product_color_images';
  info: {
    displayName: 'colorImages';
    icon: 'picture';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

export interface CategoryFilter extends Struct.ComponentSchema {
  collectionName: 'components_category_filters';
  info: {
    displayName: 'Filter';
    icon: 'filter';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    index: Schema.Attribute.Integer & Schema.Attribute.Unique;
    query: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.color-images': ProductColorImages;
      'category.filter': CategoryFilter;
    }
  }
}
