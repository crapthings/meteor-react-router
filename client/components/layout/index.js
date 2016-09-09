import nav from './nav'

Components.layout = ({ children }) => <div>
  {nav()}
  {children || Components.notFound()}
</div>
