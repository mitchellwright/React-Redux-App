import React from "react";
import { connect } from "react-redux";

const HeroInfoCard = ({ name, role, type, iconUrl, abilities }) => {
  return (
    <div className="bg-white mt-6 overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <p>{name}</p>
        <p>{role}</p>
        <p>{type}</p>
        <p>
          <img src={iconUrl} alt={name} />
        </p>
        {abilities.map((ability, index) => {
          return (
            <div key={index}>
              <p>{ability.title}</p>
              <p>{ability.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    role: state.role,
    type: state.type,
    iconUrl: state.iconUrl,
    abilities: state.abilities,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeroInfoCard);
