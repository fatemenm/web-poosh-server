import type { Struct, Schema } from '@strapi/strapi';

export interface ComponentsPromotionalBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_promotional_banners';
  info: {
    displayName: 'Promotional Banner';
  };
  attributes: {
    slogan: Schema.Attribute.String;
    promotionalText: Schema.Attribute.String;
    promotionalLink: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface ComponentsNavbar extends Struct.ComponentSchema {
  collectionName: 'components_components_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    link: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hasIcon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    iconName: Schema.Attribute.String;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    promotionalBanner: Schema.Attribute.Component<
      'components.promotional-banner',
      false
    >;
    button: Schema.Attribute.Component<'components.button', true>;
    navbar: Schema.Attribute.Component<'components.navbar', false>;
  };
}

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    hasIcon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    iconName: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.promotional-banner': ComponentsPromotionalBanner;
      'components.navbar': ComponentsNavbar;
      'components.link': ComponentsLink;
      'components.header': ComponentsHeader;
      'components.button': ComponentsButton;
    }
  }
}
